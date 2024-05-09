import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoutes() {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleMain = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/main");
      if (res.status === 200) {
        setName(res.data.name);
        setAuth(true);
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleMain();
  }, []);

  return auth ? <Outlet /> : null;
}

export default ProtectedRoutes;

