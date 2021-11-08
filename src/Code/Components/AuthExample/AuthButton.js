import { Button } from "@mui/material";
import React, { useContext } from "react";
import  Navigate from "react-router-dom";
import { authContext } from "./ProvideAuth";


export function useAuth() {
  return useContext(authContext);
}

function AuthButton (){
    let navigate = useNavigate();
  let auth = useAuth();
  return (
    <>
      auth.user ? (
      <p>
        Welcome!
        <Button
          onClick={() => {
            auth.singOut(()=> navigate("/"));
          }}
        >
          Sing Out
        </Button>
      </p>
      ) : <p>You are not Loged in.</p>
    </>
  );
};

export default AuthButton;
