import React from "react";
function Header(){
    return(
        <header>
     <div className = "row">
     <div className = "col-auto">
     <img src = "images/logo.jpg" alt = "spottabl logo" className = "logo"/>
     </div>
     <div className = "col-lg-6 col-md-6 col-sm-12">
     <h3 className = "heading"> YOUR SPOTTABL TEAM </h3>
         <p className = "sub-heading"> Spottabl supports you all throughout </p>
     </div>
     </div>
     </header>
    )
}
export default Header;