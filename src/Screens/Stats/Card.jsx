import {
  AccountBalanceRounded,
  AttachMoneyRounded,
  DirectionsCarRounded,
  LocalOfferRounded,
} from "@mui/icons-material";
import React from "react";

const Card = ({ cardTitle, cardContent }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {cardTitle === "Current Income" ? (
          <AttachMoneyRounded className="icon" />
        ) : (
          ""
        )}
        {cardTitle === "Pending Income" ? (
          <LocalOfferRounded className="icon" />
        ) : (
          ""
        )}
        {cardTitle === "Total Cars Today" ? (
          <DirectionsCarRounded className="icon" />
        ) : (
          ""
        )}
        {cardTitle === "Average Income Per Car" ? (
          <AccountBalanceRounded className="icon" />
        ) : (
          ""
        )}
      </div>
      <div className="card-title">{cardTitle}</div>
      <div className="card-content">{cardContent}</div>
    </div>
  );
};

export default Card;
