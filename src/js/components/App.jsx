import React, { Component } from "react";
import data from "./data";
import Axios from "axios";
import Nav from "./nav";
import Intro from "./intro";
import Boxes from "./boxes";
import Services from "./services";
import Team from "./team";
import Works from "./works";
import Testimonial from "./testimonial";
import Pricing from "./pricing";
import Partner from "./partner";
import Footer from "./footer";

class App extends Component {
    state={
      data:data
    }

   render(){
     return(
       <div>
         <Nav />
         <Intro/>
         <Boxes/>
         <Services/>
         <Team/>
         <Works/>
         <Testimonial/>
         <Pricing/>
         <Partner/>
         <Footer/>
         
       </div>
     )
   }
}

export default App;
// class {
//   var
//   functions
// }
