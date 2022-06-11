import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useRecoilState } from 'recoil';
import { searchResultsState, searchState } from '../atoms/searchAtom';
import { AiOutlineFilter } from 'react-icons/ai'
import { API_ENDPOINT} from '../pages/api/movie';
import { useRouter } from 'next/router';
import { mediaTypeState } from '../atoms/mediaTypeAtom';



const Search = () => {
    const API_KEY = process.env.NEXT_APP_API_KEY
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useRecoilState(searchState);
    const [searchResults,setSearchResults] = useRecoilState(searchResultsState);

    const[openFiltering,setOpenFiltering] = useState<boolean>(false);
    const[mediaType,setMediaType] = useRecoilState(mediaTypeState)

    useEffect(()=>{
        setSearchTerm("")
    },[]);

    useEffect(()=>{
        setSearchResults(null)
    },[searchTerm])

    

    const submitSearch = async(term:string) =>{
        const res = await fetch(`${API_ENDPOINT}search/${mediaType.split("-")[0]}?api_key=4e460f93715e650bd9b25978e33501d9&query=${term}`);
        const data = await res.json()
        setSearchResults(data.results);
        router.push("/discovery")

        
    }

    console.log(searchResults)


  return (
      <form onSubmit={(e)=>{
          e.preventDefault()
          submitSearch(searchTerm)
          setSearchTerm("")
      }}>
       <div className='w-full rounded-full items-center relative bg-black text-gray-500 flex gap-2 py-2 px-4'>
      
            <GoSearch />
            <input type="search" className='w-full outline-none text-sm  bg-transparent' value={searchTerm} placeholder="Search..." onChange={(e) =>setSearchTerm(e.target.value)} />
            <AiOutlineFilter className='cursor-pointer' onClick={()=>setOpenFiltering(!openFiltering)} />
       
            
            
        </div>
        {openFiltering && (
            <div className='bg-black relative text-gray-500 mt-2 py-2 px-4'>
                <div className='space-y-2'>
                    <p className={` w-[80px] text-white rounded-full cursor-pointer ${mediaType === "movie" ? "font-bold" :""}`} onClick={()=>setMediaType("movie")}>Movie</p>
                    <p className={` w-[80px] text-white rounded-full cursor-pointer ${mediaType === "tv-series" ? "font-bold" :""}`} onClick={()=>setMediaType("tv-series")}>TV</p>
                </div>


                <div className='arrow-up absolute -top-[6px] right-4'></div>
            </div>
        )}
      
       



      
      </form>
   
  )
}

export default Search