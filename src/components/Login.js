import { useEffect, useState, useContext } from "react";
import UserContext from "../context/User-context";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const getUserFormLocalStorage = () => {
  const data = localStorage.getItem("USER");

  return JSON.parse(data);
};

function Login() {
  const [profile, setProfile] = useState(null);

  const { handleSignOut, user, setUser } = useContext(UserContext);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setProfile(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (profile) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${profile.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user?.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUser(res.data);

          localStorage.setItem("USER", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }

    setUser(getUserFormLocalStorage());
  }, [profile]);

  return (
    <div className="App">
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={login}>Login With Google</button>
      )}

      {user && (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      )}
    </div>
  );
}

export default Login;
