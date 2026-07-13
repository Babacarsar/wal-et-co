import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type MediaItem = {
  id: string;
  kind: "photo" | "video";
  storage_path: string;
  url: string;
  title: string | null;
  sort_order: number;
  created_at: string;
};

const SIGNED_URL_TTL = 60 * 60 * 6; // 6 hours

export const listMedia = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("media_items")
    .select("id, kind, storage_path, title, sort_order, created_at")
    .order("sort_order", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw error;
  const rows = data ?? [];
  if (rows.length === 0) return [] as MediaItem[];
  const { data: signed, error: signErr } = await supabaseAdmin.storage
    .from("gallery")
    .createSignedUrls(rows.map((r) => r.storage_path), SIGNED_URL_TTL);
  if (signErr) throw signErr;
  return rows.map((r, i) => ({
    ...r,
    kind: r.kind as "photo" | "video",
    url: signed?.[i]?.signedUrl ?? "",
  })) as MediaItem[];
});

export const isCurrentUserAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (error) throw error;
    return Boolean(data);
  });

const addMediaSchema = z.object({
  kind: z.enum(["photo", "video"]),
  storage_path: z.string().min(1),
  title: z.string().max(200).optional().nullable(),
});

export const addMediaItem = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => addMediaSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");
    const { error } = await context.supabase.from("media_items").insert({
      kind: data.kind,
      storage_path: data.storage_path,
      url: "",
      title: data.title ?? null,
      created_by: context.userId,
    });
    if (error) throw error;
    return { ok: true };
  });

export const deleteMediaItem = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin
      .from("media_items")
      .select("storage_path")
      .eq("id", data.id)
      .maybeSingle();
    if (row?.storage_path) {
      await supabaseAdmin.storage.from("gallery").remove([row.storage_path]);
    }
    const { error } = await supabaseAdmin.from("media_items").delete().eq("id", data.id);
    if (error) throw error;
    return { ok: true };
  });
