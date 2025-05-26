
import { createClient } from '@supabase/supabase-js';

// Using the values from the integrations/supabase/client.ts file
const SUPABASE_URL = "https://hkfoekamzxvrwnchmsvx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrZm9la2Ftenh2cnduY2htc3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMTY1MzYsImV4cCI6MjA2MzU5MjUzNn0.FVi4IB9FwbKib36pnv-Q-s6zDSSR6M9fNiHMkcwboIk";

// Create the Supabase client with the URL and key
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
