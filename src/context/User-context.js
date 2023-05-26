import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext();

function Provider1({children}) {

const [user, setUser] = useState({})
  // console.log(user.email)

useEffect(() => {
    if (localStorage) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user || {})
    }
  },[])  

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem('user',JSON.stringify(userObject));
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    console.log(userObject, 'This is user');
    console.log('hello')
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  const valueToShare ={
  	user,
  	handleCallbackResponse,
  	handleSignOut
  }

	return (
	  <UserContext.Provider value={valueToShare}>
	    {children}
	  </UserContext.Provider>  
	)  
};

export {Provider1};
export default UserContext; 