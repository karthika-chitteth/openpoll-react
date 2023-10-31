import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with your JWT token key

    if (!token) {
      navigate("/auth/signin");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthGuard;
