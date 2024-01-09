import React from 'react'
import Image from 'next/image'
import anela from "../../public/asif.jpg"
const page = () => {
  return (
    <div>
    <div className='text-center text-2xl font-bold'>Home Page Asif khan mazari</div>
    <Image
    src={anela}
    width={200}
    height={200}
    alt=""
    ></Image>
    </div>
  )
}

export default page