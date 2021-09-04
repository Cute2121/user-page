import React  ,{useState, useEffect }from 'react';
import './User.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import {Avatar } from "@material-ui/core";

function User() {

    const [user, setUser] = useState([]);

    function getUser() {
        fetch("http://15.207.229.231:8000/machstatz/get_all_users").then((result) => {
            result.json().then((resp) => {
                setUser(resp)
            })
        })
    }
    console.warn(user)

    function deleteUser(email) {
        fetch(`http://15.207.229.231:8000/machstatz/delete_existing_user/${email}`, {
            method:"DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUser()
            })
        })
    }
  
    useEffect(() => {
            getUser();
    }, []);

    return (
       
        user.map((currentEl) => {
                    return (
                        <div className="user">
                        <div className="icons">
                <CreateIcon className="color"/>
                
                <button onClick={()=> deleteUser(currentEl.email)}>
                    <DeleteIcon />
                </button>  
          </div>

          <div className="user-name">
              <Avatar src={currentEl?.username}/>
              <h3>{currentEl.username}</h3>
          </div>
         </div>
                    )
                })
            
    );
}

export default User;
