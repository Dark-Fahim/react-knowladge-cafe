// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Boookmarks from './components/Boookmarks/Boookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>

      <div className='container'>
        <Header></Header>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 container gap-5'>
        <Blogs></Blogs>
        <Boookmarks></Boookmarks>
      </div>

    </>
  )
}

export default App
