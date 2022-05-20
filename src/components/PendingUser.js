import React from "react";
function PendingUser(props){
return(
<span class = "pending-user">
<span>{props.name}</span>
<span class = "dismiss" onClick = {() => {props.update(props.id)}}> x </span> 
</span>
)


}
export default PendingUser;