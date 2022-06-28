import { NextApiRequest, NextApiResponse } from 'next'
import Head from 'next/head';
import React from 'react'
import Poster from '../components/Poster';
import { useAuth } from '../context/UserContext';
import useUserBookmarks from '../hooks/useUserBookmarks';
import { supabase } from '../lib/supabase';

const Bookmarks = () => {
    const { user } = useAuth();

    const bookmarks = useUserBookmarks(user?.id)


    return (
        <main className="pl-6 bg-[#0D0C0F]  text-gray-500 ml-[55px] md:ml-[190px] mx-auto max-w-4xl min-h-screen" >
           
            <Head>
                <title>Bookmarks</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {bookmarks?.length === 0 ? (
                <h1>No bookmarks</h1>
            ):(
                <div className='space-y-3'>
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold md:text-2xl text-white'>Your Bookmarked Movies</h1>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    
                                {bookmarks?.filter((bookmark:any)=>bookmark.isMovie===true).map((bookmark:any)=>(
                                    // <p key={bookmark.id}>{bookmark.title}</p>
                                    <Poster internal={true} movie={bookmark} key={bookmark.id} type="movie" size="normal" movieIds={bookmarks}  />
                                ))}
                
                        
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold md:text-2xl text-white'>Your Bookmarked Tv Series</h1>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    
                            {bookmarks?.filter((bookmark:any)=>bookmark.isMovie===false).map((bookmark:any)=>(
                                // <p key={bookmark.id}>{bookmark.title}</p>
                                <Poster internal={true} movie={bookmark} key={bookmark.id} type="tv-series" size="normal" movieIds={bookmarks} />
                            ))}
        
            
                        </div>
                    </div>
                
                </div>
        
            

            )}
            
           
        </main>
    )
}



export default Bookmarks