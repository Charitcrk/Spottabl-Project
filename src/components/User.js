import React from "react";

function User(props){
const {user:{name,email,role}} = props;
const [firstName,lastName] = name.split(' ');
  let initials;

if(lastName)
  initials = firstName[0] + lastName[0];
else
initials = firstName[0];

return(
<div>
<li className = "list-group-item">
<div className = "row">
<div className = "col-lg-1 initial">
<span className = "initials"> {initials}  </span>
</div>
<div className = "col-lg-9 col-sm-6">
<div>
<p className = "user-name">{name}</p> 
</div>
<div>
<div className = "user-role col-lg-4 col-md-12 col-sm-12" > <i className="fa fa-user"></i> {role} </div>
<div className = "user-email col-lg-4 col-md-12 col-sm-12"> <i className="fa fa-circle"></i> {email} </div>
</div>
</div>
<div className = "col-lg-2 col-sm-6 ">
<button 
class = "delete-button" 
onClick = {()=>{props.updateUsers(props.id)}}> 
<i className="fa fa-trash"></i> </button>
</div>
</div>
</li>
</div>

)
}
export default User;