import React from "react";

function SearchedUser(props){
    const {user:{name,email,role}} = props;
    const [firstName,lastName] = name.split(' ');
      let initials;
    
    if(lastName)
      initials = firstName[0] + lastName[0];
    else
    initials = firstName[0];
    
    return(
    <div>
    <li className = "list-group-item searched-user">
    <div className = "row">
    <div className = "col-lg-1">
    <span className = "initials"> {initials}  </span>
    </div>
    <div className = "col-lg-6">
    <p className = "user-name">{name}</p> 
    <div>
    <i class="fa fa-user"></i>
    <span className = "user-role" > {role} </span>
    
    <span className = "user-email"> <i class="fa fa-circle"></i> {email} </span>
    </div>
    </div>
    </div>
</li>
</div>
 
)
}
 export default SearchedUser;