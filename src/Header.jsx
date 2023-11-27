import React, { useState } from "react";
import "./Header.css";
import {
  HistoryRounded,
  LocationOnRounded,
  TimelineRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [linkTitle, setLinkTitle] = useState(
    localStorage.getItem("Link State")
  );

  localStorage.setItem("Link State", linkTitle);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-title">Parking Management</div>
      </div>
      <div className="header-right">
        <Link
          to="/"
          className="links-main"
          onClick={(e) => {
            setLinkTitle("Parking Spaces");
          }}
        >
          <div
            className="links"
            onClick={(e) => {
              setLinkTitle("Parking Spaces");
            }}
            style={
              linkTitle === "Parking Spaces"
                ? { backgroundColor: "#BCE0C0" }
                : { backgroundColor: "#fff" }
            }
          >
            <LocationOnRounded />
            <div className="link-title">Parking Spaces</div>
          </div>
        </Link>
        <Link
          to="/history"
          className="links-main"
          onClick={(e) => {
            setLinkTitle("History");
          }}
        >
          <div
            className="links"
            onClick={(e) => {
              setLinkTitle("History");
            }}
            style={
              linkTitle === "History"
                ? { backgroundColor: "#BCE0C0" }
                : { backgroundColor: "#fff" }
            }
          >
            <HistoryRounded />
            <div className="link-title">History</div>
          </div>
        </Link>

        <Link
          to="/stats"
          className="links-main"
          onClick={(e) => {
            setLinkTitle("Revenue");
          }}
        >
          <div
            className="links"
            onClick={(e) => {
              setLinkTitle("Revenue");
            }}
            style={
              linkTitle === "Revenue"
                ? { backgroundColor: "#BCE0C0" }
                : { backgroundColor: "#fff" }
            }
          >
            <TimelineRounded />
            <div className="link-title">Stats</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
