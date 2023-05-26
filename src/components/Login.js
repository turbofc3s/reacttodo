import {useEffect, useContext, useState} from 'react';
import UserContext from '../context/User-context';

function Login() {
  const {handleCallbackResponse, user} = useContext(UserContext);
 
  const {handleSignOut} = useContext(UserContext);

  useEffect(() => {
    if(!google) return
    /* global google */
    google.accounts.id.initialize({
      client_id: "89157473197-l17rek976eg035cem0eq66ko71662bp0.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: 'outline', size: 'large'}
    );
  }, []);
 
  //if we have no user: show sign in button
  // if we have a user: show the log out button 
 

  return (  
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length !== 0 &&
        <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }

      {user &&
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      }         
    </div>    
  );
}

export default Login;
