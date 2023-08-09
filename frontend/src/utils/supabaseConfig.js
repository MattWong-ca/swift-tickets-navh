import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'SUPABASE_URL';
const supabaseApiKey = 'SUPABASE_API_KEY';

const supabase = createClient(supabaseUrl, supabaseApiKey);

export default supabase;