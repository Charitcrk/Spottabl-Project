import React from "react";
import User from "./User";
function List(props){
  const{addedUsers,setAddedUsers} = props;
 
  // function to delete users from our list

  function updateUsers(index){
   const newUsers =  addedUsers.filter((user,i)=>{
      return i !== index;
    });
    setAddedUsers(newUsers)
  }
return (
<div className = "row">
<div className = "col-md-10">
<div className="card">
<ul className="list-group list-group-flush">
{addedUsers.map((user,index)=>{
  return <User 
  key = {index} 
  id = {index} 
  user = {user}
  updateUsers = {updateUsers}
   />
})}
</ul>
</div>
</div>
</div>
)
}
export default List;