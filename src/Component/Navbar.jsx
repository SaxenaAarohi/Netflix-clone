import React from 'react'

const Navbar = () => {
  return (
    <div >
        <div className='flex   justify-between'>
          <div className='h-[170ox] w-[170px] ml-20'>
            <img src='https://kreafolk.com/cdn/shop/articles/netflix-logo-design-history-and-evolution-kreafolk_149b6498-ceef-45a6-a671-f45dab16b804.jpg?v=1717725026&width=2048'/>
          </div>
          <div className=' flex text-white  text-4xl gap-10  mt-7  '>
            <p> Home  </p>
           <p>TV Shows</p> 
           <p> Movies</p>
           <p> News&Popular</p>
           <p>My List</p>
            <p>Browse my languguge</p>
            
          </div>
          <div className='flex text-white text-4xl  mt-7 gap-10 mr-20'>
           <p>search button</p>
           <p>Details</p>
           <p>bell icon</p>
           
          </div>
        </div>
   
    </div>
  )
}

export default Navbar
