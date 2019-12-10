import React from "react";
import Auth from "./Auth";

const Layout = (props: { history: string[] }) => {
  return (
    <div className="layout">
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Layout;
