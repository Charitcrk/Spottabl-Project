import React from "react";
import SearchedUser from "./SearchedUser"
function SearchedList(props){
const {searchedUsers} = props
return (
<div className = "row">
<div className = "col-md-8">
<div className="card" style = {{marginTop : "0"}}>
<ul className="list-group list-group-flush">
{searchedUsers.map((user,index) => <SearchedUser key = {index} user = {user} />)}
</ul>
</div>
</div>
</div>
)
}

export default SearchedList;