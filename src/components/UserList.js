import React from "react";
import SearchBox from "./SearchBox";
import List from "./List";
import SearchedList from "./SearchedList"
let firstLoad = true;
function UserList(){
    const [addedUsers,setAddedUsers] = React.useState([]); // state which stores our users
    const [searchedUsers,setSearchedUsers] = React.useState([]); // state which stores our searched results

    // The below function stores our data in local storage and also retrievs the data

    React.useEffect(() => {
         if(!localStorage.getItem("storedUsers"))
        localStorage.setItem("storedUsers",JSON.stringify(([]))); 
        if(!firstLoad){
            localStorage.setItem("storedUsers",JSON.stringify((addedUsers))); 
        }
         if(firstLoad){
            setAddedUsers(JSON.parse(localStorage.getItem("storedUsers")));
            firstLoad = false;
         }

     },[addedUsers])

 // Below function updates out list of users

    function updateAddedUsers(updatedAddedUsers,callback){
        setAddedUsers((prevValue) => {
           return [...prevValue ,...updatedAddedUsers] ;
        },callback());  
        }
       
 // Below function updates our search results

    function updateSearchedUsers(key,value){
     if(value === "")
     setSearchedUsers([]);
    else if(key === "name"){
        setSearchedUsers(addedUsers.filter(result => result.name.includes(value)));
      }
      else if(key === "email"){
        setSearchedUsers(addedUsers.filter(result=> result.email.includes(value)));
      }
    }
    return(
    <div className = "user-list">
        <p> Custom Success Managers </p> 
        <SearchBox setAddedUsers = {setAddedUsers} updateSearchedUsers = {updateSearchedUsers} addedUsers = {addedUsers} updateAddedUsers = {updateAddedUsers}/>
        <SearchedList searchedUsers = {searchedUsers} />
        <List addedUsers = {addedUsers} setAddedUsers = {setAddedUsers} />
    </div>
)
}
export default UserList;