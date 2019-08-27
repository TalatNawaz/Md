import React, {Component} from "react";

class Team extends Component{

render(){

return(

<div>
<section id="doctor" class="home-section bg-gray paddingbot-60">
      <div class="container marginbot-50">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="wow fadeInDown" data-wow-delay="0.1s">
              <div class="section-heading text-center">
                <h2 class="h-bold">Doctors</h2>
                <p>Ea melius ceteros oportere quo, pri habeo viderer facilisi ei</p>
              </div>
            </div>
            <div class="divider-short"></div>
          </div>
        </div>
      </div>

      <div class="container">
      <div class="row">
         <div class="col-lg-3 col-sm-6 col-md-4">
         <img src="img/team/1.jpg" alt="" width="100%"/>
             <p className="text-center" style={{paddingTop:"20px"}}><span style={{color:"#3fbbc0"}}><b>Alice Grue</b></span> <br/>Psychiatrist</p>
             
         </div>
         <div class="col-lg-3 col-sm-6 col-md-4">
         <img src="img/team/2.jpg" alt="" width="100%"/>
         <p className="text-center" style={{paddingTop:"20px"}}><span style={{color:"#3fbbc0"}}><b>Joseph Murphy</b></span> <br/>Cardiologist</p>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-4">
        <img src="img/team/3.jpg" alt="" width="100%"/>
        <p className="text-center" style={{paddingTop:"20px"}}><span style={{color:"#3fbbc0"}}><b>Alison Davis</b></span> <br/>Cardiologist</p>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-4">
        <img src="img/team/4.jpg" alt="" width="100%"/>
        <p className="text-center" style={{paddingTop:"20px"}}><span style={{color:"#3fbbc0"}}><b>Adam Taylor
</b></span> <br/>Neurologist</p>
        </div>
        </div>
      
      </div>

    </section>
    


</div>

)


}


}
export default Team;