// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boookmarks from './components/Boookmarks/Boookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const [readingTime, setReadingTime] = useState(0)
  function handleMarkAsRead (time) {
    let isReaded = false
    if(isReaded === false){
      isReaded = true
      const newTime = readingTime + parseInt(time)
      setReadingTime(newTime)
    }
    return
  }

  return (
    <>

      <div className='container'>
        <Header></Header>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 container gap-5'>
        <Blogs 
        handleBookmarks={handleBookmarks}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Boookmarks bookmarks={bookmarks} readingTime={readingTime}></Boookmarks>
      </div>

    </>
  )
}

export default App
