 const SUPABASE_URL = "https://ssnabfzwfvcmwkgibvec.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzbmFiZnp3ZnZjbXdrZ2lidmVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTE1MjcsImV4cCI6MjA4NTYyNzUyN30.s02EFB4FRopxB7Ak7zWUSkINcGY5ESRn7SLbDXn0Wbo";

  const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

