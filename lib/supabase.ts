import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Client for public operations (e.g. read, public storage download)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage helper for product photos
export const PRODUCT_STORAGE_BUCKET = "product-images";

export async function uploadProductImage(file: File, path: string): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from(PRODUCT_STORAGE_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Supabase image upload error:", error.message);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from(PRODUCT_STORAGE_BUCKET)
    .getPublicUrl(data.path);

  return publicUrlData.publicUrl;
}
