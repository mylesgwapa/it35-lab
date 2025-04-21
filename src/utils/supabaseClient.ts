import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient("https://hikeneiwagahtppzntym.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpa2VuZWl3YWdhaHRwcHpudHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3OTYxMDksImV4cCI6MjA1ODM3MjEwOX0.BHjh3Q480sKAUDHfwoUxcKK14TuUOF-t3vGCS0gM2q0");