import React from "react";
import Navbar from "@theme-original/Navbar";

export default function NavbarWrapper(props) {
  return (
    <>
      <div
        style={{
          background: "#f0ffc4",
          textAlign: "center",
          padding: "16px 32px",
          color: "var(--ifm-color-primary-dark)",
          fontWeight: "bold",
          fontSize: "0.875rem",
        }}
      >
        This project is an <b>incubation project</b> being run inside the Green
        Software Foundation; as such, we DON’T recommend using it in any
        critical use case. Incubation projects are experimental, offer no
        support guarantee, have minimal governance and process, and may be
        retired at any moment. This project may one day Graduate, in which case
        this disclaimer will be removed.
      </div>
      <Navbar {...props} />
    </>
  );
}
