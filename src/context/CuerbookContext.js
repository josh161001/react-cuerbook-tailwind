import React, { useState } from "react";

const CuerbookContext = React.createContext([{}, () => {}]);

const accessToken = localStorage.getItem("access_token") || "";

const CuerbookProvider = (props) => {
  const [auth, setAuth] = useState({
    acces_token: accessToken,
    auth: accessToken !== "",
  });

  return (
    <CuerbookContext.Provider value={[auth, setAuth]}>
      {props.children}
    </CuerbookContext.Provider>
  );
};

export { CuerbookContext, CuerbookProvider };
