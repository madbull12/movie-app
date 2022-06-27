import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { useAuth } from '../context/UserContext';
import useUserBookmarks from '../hooks/useUserBookmarks';

const Bookmarks = () => {
    const { user } = useAuth();
    const bookmarks = useUserBookmarks(user)
    console.log(bookmarks)
    return (
        <div>Bookmarks</div>
    )
}



export default Bookmarks