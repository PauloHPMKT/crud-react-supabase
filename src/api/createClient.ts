import { createClient } from "@supabase/supabase-js";
import { supabase_url, supabase_key } from "./config/subaseConfig.json";

const supabaseUrl = supabase_url;
const supabaseKey = supabase_key;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
