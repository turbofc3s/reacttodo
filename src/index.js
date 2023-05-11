import React from 'react';
import ReactDOM from 'react-dom/client';
// import {GoogleOAuthProvider} from '@react-oauth/google';
import App from './App';
import {Provider} from './context/todos'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render( 
	<Provider>
	  <App />
	</Provider>
); 
	// <GoogleOAuthProvider clientId="89157473197-l17rek976eg035cem0eq66ko71662bp0.apps.googleusercontent.com">
 //        <React.StrictMode>
            // <App />
    //     </React.StrictMode>
    // </GoogleOAuthProvider>
  // );  





// import React from 'react';
// import ReactDOM from 'react-dom';
// import {GoogleOAuthProvider} from '@react-oauth/google';
// import App from './App';

// ReactDOM.render(
//     <GoogleOAuthProvider clientId="89157473197-l17rek976eg035cem0eq66ko71662bp0.apps.googleusercontent.com">
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </GoogleOAuthProvider>,
//     document.getElementById('root')
// );
