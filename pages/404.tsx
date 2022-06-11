import Image from 'next/image'
import illus from '../public/404.svg'

export default function Custom404() {
    return (
        <div className="bg-[#0D0C0F]  h-screen flex justify-center text-white">
            <Image width={100} height={100}  src={"/../public/404.svg"} alt="404" />
        </div>
    
    )
  }