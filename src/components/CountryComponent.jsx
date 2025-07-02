import React from "react";

function CountryComponent({ name, flag }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "150px",
        height: "200px",
        border: "1px solid #ddd",
        borderRadius: "6px",
      }}
    >
      <img src={flag} alt={name} width="100px" height="100px" />
      <p style={{ fontWeight: 700, textAlign: "center" }}>{name}</p>
    </div>
  );
}

export default CountryComponent;
