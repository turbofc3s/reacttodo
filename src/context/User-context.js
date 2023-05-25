import { createContext, useState } from 'react';

const UserContext = createContext();

function Provider1({children}) {

const [user, setUser] = useState({})
  // console.log(user.email)

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
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
	  <UserContext.Provider1 value={{valueToShare}}
	    {children}
	  </UserContext.Provider1>  
	)  
};

export {Provider1};
export default UserContext;