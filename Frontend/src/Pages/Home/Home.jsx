import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/banner'
import Hero from '../../Components/Hero/Hero'
import Explore from '../../Components/Explore/Explore'
import  Card  from '../../Components/Card/Card'
import Stats from '../../Components/Stats/Stats'
import Advantage from '../../Components/Advantage/Advantage'
import Comments from '../../Components/Comments/Comments'
import SocialIcons from '../../Components/SocialLink/SocialLink'
import Unqiue from '../../Components/Unique/Unqiue'
import AskQuestion from '../../Components/AskQuestion/AskQuestion'

const Home = () => {
  return (
    <div>
        <SocialIcons/>
         <AskQuestion/>
          <Banner/>
           <Hero/>
            <Explore/>
             <Card/>
              <Advantage/>
              <Unqiue/>
                <Comments/>
                <Stats/>   
          <Footer/>
        </div>
  )
}

export default Home