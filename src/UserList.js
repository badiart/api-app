import react,{ useState } from "react";
import {useEffect} from "react"
import axios from "axios"
const UserList = () => {

  const [users, setusers] = useState([]); // where to store the returned list of users
 const [error,seterror]=useState(null);
  useEffect(() => {
function axiosFun (){

    axios.get("http://jsonplaceholder.typicode.com/users")
      .then(response=>{setusers(response.data);console.log(response.data)})
      .catch(error=>seterror(error));
}
      axiosFun();

 }, []);
 return(
   <div className="first">
       <ul>
        {users.map(el=> <li>{el.name}</li>)}
        </ul>
   </div>
 )
}

export default UserList;
