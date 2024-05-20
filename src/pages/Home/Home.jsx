import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

const [category,SetCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} SetCategory={SetCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
