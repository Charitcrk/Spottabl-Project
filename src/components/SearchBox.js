import React from "react";
import PendingUser from "./PendingUser";
function SearchBox(props){
let firstClick = true;
const [user,setUser] = React.useState({}); // a hook for a particular user
const [pendingUsers ,setPendingUsers] = React.useState([]); //state to store users which are to be added

// Function to delete a user which are pending Users array (purple box)

function updatePendingUsers(index){
const newPendingUsers = pendingUsers.filter((user,i) => {
  return i !== index;
})
setPendingUsers(newPendingUsers);
}

// Function to update user state on input change

function handleChange(event){
const {id,value} = event.target;
setUser((prevValue) => {
  return {...prevValue, [id] : value}
},props.updateSearchedUsers(id,value))

}

// Function which updates pending users array

function handleClick(event){
  event.preventDefault();
if(firstClick){
  setPendingUsers((prevValue) => {
    return [...prevValue,user];
  })
}
}

// Function which adds all the pending users to are original list at one time on modal NO click

function handleModalNoClick(){
    props.updateAddedUsers(pendingUsers,function(){
      setPendingUsers([]);
    });
    setUser({});
    firstClick = true;
}

// Function which allows to add more than one users at a time

function handleModalYesClick(){
  if(firstClick)
    firstClick = false;
  
  else{
    setPendingUsers((prevValue) => {
      return [...prevValue,user]
    })
  }
  setUser({});
}

return(
  <>
  {pendingUsers.map((user,index)=>{
    return (
      <PendingUser 
      key = {index} 
      id = {index} 
      name = {user.name} 
      update = {updatePendingUsers}
      />
    )
  })}
    <form className = "row">
  
    <div className = "col-md-10 col-sm-6">
    <div className = "mb-3">
    <label htmlFor="name" className="form-label">Name</label>
     <input type="text" id = "name" className="form-control"  value = {user.name || ""}  onChange = {handleChange}  required />

    </div>
    </div>
    <div className = "col-md-2 col-sm-6">
    <button type="submit" onClick = {handleClick} className="btn btn-darkBlue" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
    Add CSM</button>  </div>
    <div className = "mb-3 col-md-10 col-sm-6">
    <label htmlFor="email" className="form-label">Email</label>
     <input type="email" id = "email" className="form-control" value = {user.email || ""} onChange = {handleChange}   required />
   
    </div>
    <div className = " col-md-10 col-sm-6">
    <label htmlFor="role" className="form-label">Role</label>
     <input type="text" id = "role" className="form-control" value = {user.role || ""}  onChange = {handleChange}  required />
    </div> 

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-body">
       Do you want to add more users?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick = {handleModalYesClick} data-bs-dismiss="modal">Yes</button>
        <button type="button" className="btn btn-danger" onClick = {handleModalNoClick} data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
    </form>
    </>
)
}
export default SearchBox;
