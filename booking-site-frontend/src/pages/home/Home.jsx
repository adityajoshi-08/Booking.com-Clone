import React from 'react'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuresProperties/FeaturedProperties'
import "./Home.css"
import Maillist from '../../components/maillist/Maillist'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle"><span className='genius'>Browse</span> by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests <span className='genius'>love</span></h1>
          <FeaturedProperties />
          <Maillist />
          <Footer />
        </div>
    </div>
  )
}