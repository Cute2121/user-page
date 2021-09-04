import React  from 'react'; 
import './App.css';
import User from './User';
import NewUser from './NewUser';


function App() {

  return (

    <div className="app">
    
    <h1>USER DETAILS</h1>
      <div className='list'>
        <h2>List of Existing Users</h2>
      <div className="existing-user">        
        <User />
       
      </div>
      </div>
      <NewUser />
      </div>
      
  );
}

export default App;
