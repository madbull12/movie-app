import { User } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";


// Create user context
export const UserContext = createContext({});
export const useAuth =() => useContext<any>(UserContext)

// UserContextProvider is the parent element of the entire application
export function UserContextProvider({
  children,
}:{
  children:ReactNode
}) {
  const [session, setSession] = useState<any>(null)
  const [user,setUser]=useState<User | null>(null)


  const signInWithGoogle = async() => {
     await supabase.auth.signIn({
      provider:"google"
    })

   
  }

  useEffect(() => {

    // get session for user
    const session = supabase.auth.session();
    setSession(session);

    // configure the auth state listener
    // if the auth state changes the session will be updated
    // and a POST request will be made to the /api/auth route
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      console.log(authListener)
  
      await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ event, session }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);



  return <UserContext.Provider value={{ session,signInWithGoogle }}>
    {children}
  </UserContext.Provider>;
};
