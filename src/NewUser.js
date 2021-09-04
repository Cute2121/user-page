import React, { useState } from 'react';
import './NewUser.css';
import ClearIcon from '@material-ui/icons/Clear';



function NewUser() {

    const url = "http://15.207.229.231:8000/machstatz/add_new_user";
    const [data,setData] = useState({
        first_name: "",
        last_name:"",
        username:"",
        email:"",
        password: "",
    });

    function newUser() {
        console.warn({data});
        fetch(url, {
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Comtent-Type" : "application/json"
            },
            body:JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }
    
    return (

        <div className="newUser">
           
            <form className="form">
            <div className="heading">
              <h3 className="color1">ENTER THE DETAILS</h3>
              <ClearIcon className="color"/>
            </div>
                <h3 className="dst">First Name *</h3>
                <input  onChange={(e) => setData(e.target.value)}  
                 value={data.first_name}
                placeholder="Firstname" type="text" required
                />

                <h3 className="dst">Last Name *</h3>
                <input  onChange={(e) => setData(e.target.value)} 
                 value={data.last_name}
                placeholder="Lastname" type="text" required/>

                <h3 className="dst">Username *</h3>
                <input onChange={(e) => setData(e.target.value)} 
                value={data.username}
                placeholder="Username" type="text" required/>

                <h3 className="dst">E-mail *</h3>
                <input onChange={(e) => setData(e.target.value)} value={data.email}
                placeholder="example@gmail.com"
                type="text" required/>

                <h3 className="dst">Password *</h3>
                <input onChange={(e) => setData(e.target.value)}   value={data.password} 
                type="password" required/>

                <div className="buttons">
                    <button className="button1" onClick={newUser} type="submit">
                       Add
                    </button>
                </div>
 
            </form>
        </div>
    );
}

export default NewUser;
