import React, { Children } from "react";

const AuthLayout = ({children}:any) => {
  return (
    <div className="flex justify-center items-center h-full">
        {children}
    </div>
  )
};

export default AuthLayout;
