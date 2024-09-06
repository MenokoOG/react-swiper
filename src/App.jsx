import React from 'react'
import './App.css'
import Usage from './components/usage/Usage.jsx'
import Gap from './components/gap/Gap.jsx'
import BreakPoint from './components/breakpoint/BreakPoint.jsx'
import Pagination from './components/pagination/Pagination.jsx'
import LazyLoad from './components/lazyload/LazyLoad.jsx'
import Effects from './components/effects/Effects.jsx'
import Vertical from './components/vertical/Veritcal.jsx'

function App() {


  return (
    <>
      <h2>Basic usage</h2>
      <Usage />
      <h2>This is with some gap and Scroll</h2>
      <Gap />
      <h2>Responsive Breakpoints in Swiper Element</h2>
      <BreakPoint />
      <h2>Pagination and Navigation</h2>
      <Pagination />
      <h2>Lazy Loading</h2>
      <LazyLoad />
      <h2>3D Cude Effect</h2>
      <Effects />
      <h2>Vertical Slider</h2>
      <Vertical />

    </>
  )
}

export default App
