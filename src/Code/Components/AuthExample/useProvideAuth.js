import React, { useState } from "react";

const fakeAuth = {
  isAuthenticated: false,
  signIn(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  singOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signIn = (cb) => {
    return fakeAuth.signIn(() => {
      setUser("Dolly");
      cb();
    });
  };

  const singOut = (cb) => {
    return fakeAuth.singOut(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signIn,
    singOut,
  };
}

export default useProvideAuth;
