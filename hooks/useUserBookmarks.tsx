import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function useUserBookmarks(user:any,column?:string) {
    const [userBookmarks,setUserBookmarks] = useState<any>();
  
    useEffect(()=>{
      const getCurrentUserBookmarks = async() =>{
        const { data } = await supabase 
          .from("bookmarks")
          .select()
          .eq("user_id",user?.id)
    
        // const findBookmark = data?.map((bookmark)=>bookmark.user_id === user?.id);
       
        // if (findBookmark) {
        //   setUserExists(true);
        // } else {
        //   setUserExists(false)
        // }
        setUserBookmarks(data);
        console.log(userBookmarks)
        return data;
      }
  
      getCurrentUserBookmarks();
    },[]);

    return userBookmarks
}