import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
import KitchenPage from './stores/pages/KitchenPage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CampPage'
import FridgePage from './stores/pages/FridgePage'
import MenPage from './stores/pages/ManPage'
import WomanPage from './stores/pages/WomenPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import MobileSingle from './stores/singles/MobileSingles'
import AcSingle from './stores/singles/AcSingles'
import ComputerSingle from './stores/singles/ComputerSingles'
import FurnitureSingle from './stores/singles/FurnitureSingles'
import KitchenSingle from './stores/singles/KitchenSingles'
import MenSingle from './stores/singles/MenSingles'
import WatchSingle from './stores/singles/WatchSingles'
import WomanSingle from './stores/singles/WomenSingles'
import WatchPage from './stores/pages/WatchPage'
import FridgeSingle from './stores/singles/FridgeSingles'
import UserCart from './stores/UserCart'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <Landingpage/>}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/women' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} />        
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
        <Route path='/cart' element = {<UserCart />} />
        <Route path='/ac/:id' element = {<AcSingle/>} />
        <Route path='/computers/:id' element = {<ComputerSingle />} />
        <Route path='/furniture/:id' element = {<FurnitureSingle />} />
        <Route path='/kitchen/:id' element = {<KitchenSingle />} />
        <Route path='/men/:id' element = {<MenSingle />} />
        <Route path='/watch/:id' element = {<WatchSingle />} />
        <Route path='/woman/:id' element = {<WomanSingle />} />
        <Route path='/fridge/:id' element = {<FridgeSingle />} />
        
      </Routes>
    </div>
  )
}
export default App