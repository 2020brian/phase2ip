import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [getEmail, setEmail] = useState('')
    const [getPassword, setPassword] = useState('')
    //const [isLoggedIn,setIsLoggedIn]= useState(false)
    const [userdata, setUserData]= useState([])
    useEffect(()=>{
        fetch('https://json-server-dusky-nine.vercel.app/user-data')
        .then(response => response.json())
        .then( data => setUserData(data))
    },[])
    const user = userdata.find((user) => user.email === getEmail && user.password === getPassword)
    function handleSubmit(e){
        e.preventDefault()
            if(user){
                alert('Login Success')
            }else{
               alert('Wrong password and email combination')
            }
            setEmail('')
            setPassword('')
    }
      
   

    return(
       
    )
}
export default Login;
