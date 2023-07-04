import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const RequiredAuthentication = () => {
    let user = localStorage.getItem("user");
    return (
        <>
            {user ? <Outlet /> : <Navigate to="/home" />}
        </>
    )
}