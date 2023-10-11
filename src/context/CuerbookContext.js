import React, { useState } from "react";

const CuerbookContext = React.createContext([{}, () => {}]);

const CuerbookProvider = (props) => {
  // definir el state inicial
  const [auth, guardarAuth] = useState({
    access_token: "",
    auth: false,
  });

  return (
    <CuerbookContext.Provider value={[auth, guardarAuth]}>
      {props.children}
    </CuerbookContext.Provider>
  );
};

export { CuerbookContext, CuerbookProvider };
