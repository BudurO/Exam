import React from 'react'
import axios from 'axios'
import Imgamzon from '../assets/amzonimg.jpg'
interface ImgInter{
description:string
category:string
id: string,
image: string,
title:string,
price:number,

}
function Home() {
    const [Amazonimg,setimg] = React.useState<ImgInter[]>([]);


    React.useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
        setimg(res.data)
        console.log(res);
        })
        
    },[])

        const Deleteimge = (id) => {
            axios.delete(`https://fakestoreapi.com/products/1${id}`)
            setimg(
                Amazonimg.filter((Amazonimg)=>{
                    return Amazonimg.id !== id;
                })
            );      

    
  return (
   <>
   <div className='border h-10 bg-gray-800 flex justify-start text-white text-sm'>
<div className='ml-4'>
    All
</div>
<div className='ml-4'>
Today's Deals
</div>
<div className='ml-4'>
Customer Service
</div>
<div className='ml-4'>
Registry
</div>
<div className='ml-4'>
Gift Cards
</div>
<div className='ml-4'>
Sell
</div>
   </div>

   <div id="default-carousel" className="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative overflow-hidden rounded-lg h-56">
         {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <img src={Imgamzon} className="absolute object-fill w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

   <div>

{Amazonimg.map((item) => {
    return(
        <div key={item.id}>
            <div>
                {item.description}
            </div>
            <div>
                {item.category}
            </div>
            <img className='w-10' src={item.image} alt="Logo" />

            <div>
                {item.title}
            </div>
            <div>
                {item.price}
            </div>
        </div>
       
    )
})}
   </div>
   </>
  )
}

export default Home