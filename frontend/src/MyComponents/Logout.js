import React from "react";

const Logout = (props) => {
    if(localStorage.getItem('t'))
    {
        localStorage.clear();
        window.location.href = "/Login";
    }
    return(
      <div>
      </div>
    )
  }

export default Logout;