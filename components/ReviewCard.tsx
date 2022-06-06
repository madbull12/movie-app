import React, { useState } from 'react'
import { MovieReview } from '../interface'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'


interface IReview {
    review:MovieReview
}
const ReviewCard = ({ review }: IReview) => {
    const [readMore,setReadMore] = useState<boolean>(false)

  return (
    <div className='flex flex-col  gap-2 py-2'>
        <div className="flex items-center space-x-6">
            <Image alt={review.author_details.name} className="rounded-full" src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`} width={50} height={50}  />
            <div>
                <p className='text-base font-bold text-white'>{review.author_details.username}</p>
                <div className='flex items-center'>
                    {Array(Math.round(review.author_details.rating/2)).fill("").map((_,i)=>(
                        <AiFillStar color="yellow" size={18} key={i} />
                    ))}
                    <p className='ml-2'>{review.author_details.rating}</p>
                    
                </div>

            </div>

        </div>
        <span>
            {review.content.length > 500
                ? <p>{review.content.slice(0,readMore ? review.content.length : 500)} <span className='text-[#EC1C24] cursor-pointer' onClick={()=>setReadMore(!readMore)}>{readMore ? "show less" : "read more"}</span></p>
                : <p>{review.content}</p>
            } 
        </span>           
                        

       
       
    </div>
  )
}

export default ReviewCard