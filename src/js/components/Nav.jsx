import React, {Component} from "react";

class Nav extends Component{
render(){

return(
  <div>
   
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="top-area" style={{backgroundColor:"#3fbbc0"}}>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6">
              <p class="bold text-left">Monday - Saturday, 8am to 10pm </p>
            </div>
            <div class="col-sm-6 col-md-6">
              <p class="bold text-right">Call us now +62 008 65 001</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container navigation">

        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
          <a class="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="" width="150" height="40" />
                </a>
        </div>

        
        <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#intro" style={{color:"#3fbbc0"}}>Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#doctor">Doctors</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="badge custom-badge red pull-right">Extra</span>More <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="index.html">Home CTA</a></li>
                <li><a href="index-form.html">Home Form</a></li>
                <li><a href="index-video.html">Home video</a></li>
              </ul>
            </li>
          </ul>
        </div>
      
      </div>
      
    </nav> 

  
  </div>
)

}


}
export default Nav;