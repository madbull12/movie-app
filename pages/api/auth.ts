import { supabase } from "../../lib/supabase";
import { NextApiRequest,NextApiResponse } from "next";

export default function AuthHandler(req:NextApiRequest, res:NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res)
}