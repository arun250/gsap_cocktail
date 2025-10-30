import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)

import React from 'react'

function App() {
  return (
    <div>
      
    <h1 className='text-3xl text-indigo-300 flex-center'>Hello, GSAP</h1>
    </div>
  )
}

export default App