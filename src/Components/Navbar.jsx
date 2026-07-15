import React, { useState } from 'react'
import {Camera, Search} from 'lucide-react'

const Navbar = ({setUrl, url}) => {

    const [inputValue, setInputValue] = useState("")
    
    

    const handleSubmit = (e) => {
            if (e.trim === "") return
             setUrl(`https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=${e}&image_type=photo&pretty=true`);
             setInputValue("")
             console.log(url);
             
    }       

  return (
    <>
    <div className='flex justify-between gap-3 p-6 items-center sticky z-40'>
        {/* Logo Section */}
        <div className='flex gap-2'>
            <Camera className='text-purple-500' />
            <span className='font-sans font-bold'>Pixabay</span>
        </div>
        {/* Searchbar */}
        <div className='flex items-center gap-3 w-xl   justify-center'>
            <Search />
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='flex-1 rounded px-2'  placeholder='Search Images....' />
            <button onClick={()=> handleSubmit(inputValue)} className='bg-purple-500 px-3 py-2 rounded'>Go</button>
            
        </div>
        {/* Favorites */}
        <div>
            <button className="px-4 py-2 bg-purple-500 rounded">Favorites</button>
        </div>

    </div>
      
    </>
  )
}

export default Navbar
