import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

function isValidSupabaseUrl(value) {
  if (!value || value.includes('your-project-ref')) return false

  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function isValidSupabaseKey(value) {
  return Boolean(value && !value.includes('your-anon-key'))
}

const isTestEnvironment = import.meta.env.MODE === 'test'

export const isSupabaseConfigured =
  !isTestEnvironment &&
  isValidSupabaseUrl(supabaseUrl) &&
  isValidSupabaseKey(supabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null
