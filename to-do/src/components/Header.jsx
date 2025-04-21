import React, { useState } from "react";
import NoteAltTwoToneIcon from "@mui/icons-material/NoteAltTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  function handleUserIconClick() {
    if (!user) {
      navigate("/login");
    }
  }

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#f5ba13", color: "white" }}>
      <h1 style={{ display: "flex", alignItems: "center" }}>
        <NoteAltTwoToneIcon fontSize="large" />
        Task Keeper
      </h1>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setShowLogout(true)}
        onMouseLeave={() => setShowLogout(false)}
      >
        <AccountCircleIcon
          fontSize="large"
          style={{ cursor: "pointer" }}
          onClick={handleUserIconClick}
        />
        {user && showLogout && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "white",
              color: "black",
              padding: "5px 10px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;