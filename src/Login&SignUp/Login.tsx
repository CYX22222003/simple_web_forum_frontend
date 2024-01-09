import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState, useContext} from "react";
import { AuthenContext } from "../App.tsx";

export default function Login(){
    /*
    1. create a function that GET email lists
    2. Verify that the email is created
     2.1 if email is not created, alert user to register
     2.2 Otherwisem obtain email id
    3. GET request is sent, once the email id is obtained 
        to obtain values of email and its associated password
    4. Authenticate the password
    */
    const {AuthoState, setState} = useContext(AuthenContext);
    const [email, setEmail] = useState<string>("");
    const [emailarr, setEmailArr] = useState<any>([]);
    const [emailid, setID] = useState<number>(0);
    const [passwd, setPasswd] = useState<string>("");
    const [addressarr, setAddressArr] = useState<string>("");
    function findEmailId(email,arr){
        arr.forEach( (ele : any) => {
            if(ele.address === email){
                setID(ele.id);
                console.log("email id: ",ele.id);
            }else{
                console.log("cannot extract id");
            }
        }
        )
    }

    useEffect(() => {
    fetch("http://127.0.0.1:4000/emails/")
        .then((response:any) => {
            return response.json();
        }).then((data:any) => {
            console.log(data);
            setEmailArr(data);
            const tempxs:any = data.map((ele:any) => {
                return ele.address;
            });
            console.log("email arr:", tempxs);
            return tempxs;  
        }).then((arr:any)=>{
            console.log("address list:", arr);
            setAddressArr(arr);
        }
        ).catch(
            (err:any) => {console.log(err);}
        );}, []);

    
    

    function handleSubmit(e){
        e.preventDefault();
        console.log("email: ", email);
        console.log("passwd: ", passwd);
        if(addressarr.includes(email)){
            findEmailId(email, emailarr);
            console.log(emailid);
            console.log("account_created",true);
            check_password();
        }else{
            setEmail("");
            alert("the email is not registered")
        }
    }

    function HandleLogin(){
        if(email === "test" && passwd === "test123#"){
            setState(true);}
        else{
            alert("wrong password or username");
        }
    }

    function check_password(){
    if(emailid !== 0){
        fetch("http://127.0.0.1:4000/emails/"+String(emailid))
        .then((response:any) =>{
            console.log(response);
            return response.json();
        }).then((data:any) => {
            if(passwd === ""){
                alert("Please enter your password")
                return false;
            }else{
                const check:any = (data.users)[0].passwd;
                console.log(check);
                return check === passwd;
            }
        }).then((verified:boolean) => {
            if(verified){
                alert("successfully logged in");
                console.log("successful, login status before change: ", AuthoState);
                setState(true);
            }else{
                alert("wrong password");
                setPasswd("");
            }
        }).catch((err:any) => {
            console.log(err);
        })};
}
   
    return (
    <div>
        <br /><br />
        
        <div className="container mt-4 bg-light text-center align-items-center">
            <h3>Login page</h3><br /> <br />
            <form onSubmit={handleSubmit}>
                <label className="form-label" >Email: </label><br />
                <input className="form-control-sm" value={email}
                    onChange={(e:any)=>{setEmail(e.target.value);}}
                /> <br />
                <label className="form-label">password:</label><br />
                <input className="form-control-sm" type="password" value={passwd}
                    onChange={(e:any)=>{setPasswd(e.target.value);}}
                /><br />
                <input type="submit" name="Login" />
           </form><br />
           <Link to="/register">Register for a new account</Link>
        </div><br />
    </div>
    )
}