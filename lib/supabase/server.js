import { createClient } from "@supabase/supabase-js";

/**
 * Membuat koneksi Supabase untuk server (membaca data publik katalog).
 * Menggunakan SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable.
 */
export function createServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error(
      "SUPABASE_URL dan SUPABASE_SECRET_KEY wajib disetel di environment variable."
    );
  }

  // Normalisasi URL jika terdapat akhiran /rest/v1 atau garis miring di akhir
  const cleanUrl = url.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");

  return createClient(cleanUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

