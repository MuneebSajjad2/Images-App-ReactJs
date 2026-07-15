import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import TrendingFilter from './Components/TrendingFilter'
import ImageGrid from './Components/Images/ImageGrid'

const App = () => {
  const [url, setUrl] = useState("https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=nature&image_type=photo&pretty=true")
 


  return (
    <>
    <div className='px-3 bg-gray-800 min-h-screen'>
      <div>
        <Navbar setUrl={setUrl} url={url} />
        <TrendingFilter setUrl={setUrl}   />
      </div>
      <div  >
        <ImageGrid url={url} />
      </div>
    </div>
      
    </>
  )
}

export default App
