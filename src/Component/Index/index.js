import React , {Component} from 'react'
 
import Home from './../Home'
import Footer from './../Footer'
import About from './../About'
import Portfolio from './../Portfolio'
import Work from './../Work'
import Profile from './../Profile'
import SocialMedia from './../SocialMedia'



class Index extends Component {
  render (){
    return (
      <div>
         <Home />
         <Work />
         <Portfolio />
         <Profile />
         <About />
         <SocialMedia />
         <Footer />
      </div>
    )
  }
}
export default Index;