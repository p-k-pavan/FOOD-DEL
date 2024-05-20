import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'

const Home = () => {

const [category,SetCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} SetCategory={SetCategory}/>
    </div>
  )
}

export default Home
