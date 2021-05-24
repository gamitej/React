import React from "react";
import { Button, Image } from "react-bootstrap";
import logo from "../images/2.svg";

const Comp1 = () => {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            marginTop: "200px",
            lineHeight: 1.8,
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "left",
            textTransform: "none",
          }}
        >
          Education scheduling software to reduce admin work, increase
          efficiency, and deliver better results
        </h5>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 20,
            textAlign: "left",
          }}
        >
          Save valuable teaching time with easy online appointments, class
          scheduling, student management, payments, automated reminders and web
          conferencing!
        </p>
        <br />
        <Button
          variant="danger"
          style={{
            padding: "10px 20px",
            borderRadius: "124px",
            position: "absolute",
            alignItems: "left",
            top: "65%",
            left: "10%",
            backgroundImage:"linear-gradient( to right, purple, red)"
          }}
        >
          Get started Now!
        </Button>
        <br />
        <p
          style={{
            textAlign: "left",
            marginRight: "340px",
            marginTop: "70px",
          }}
        >
          No credit card required! Our free plan is free forever.
        </p>
      </div>
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: "600px",
            marginRight: "90px",
            marginTop: "120px",
          }}
          src={logo}
        />
      </div>
    </div>
  );
};

export default Comp1;
