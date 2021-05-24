import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../images/Path-19-1.svg";

const Card2 = () => {
  return (
    <Container
      style={{
        display: "flex",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          flex: "1",
          border: "2px #ccc solid",
          marginRight: "60px",
          marginLeft: "60px",
          padding: "60px 70px",
          borderRadius: "12px",
        }}
      >
        <Image
          src={logo}
          style={{
            marginRight: "42px",
          }}
          fluid
        />
        <p>
          Manchester United Football Club is a professional football club based
          in Old Trafford, Greater Manchester Manchester United Football Club is
          a professional football club based in Old Trafford, Greater Manchester
        </p>
        <br />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          - Owner Glazer
        </p>
      </div>
      <div
        style={{
          flex: "1",
          border: "2px #ccc solid",
          marginRight: "60px",
          marginLeft: "60px",
          padding: "60px 70px",
          borderRadius: "12px",
        }}
      >
        <Image
          src={logo}
          style={{
            marginRight: "42px",
          }}
          fluid
        />
        <p>
          Manchester United Football Club is a professional football club based
          in Old Trafford, Greater ManchesterManchester United Football Club is
          a professional football club based in Old Trafford, Greater Manchester
        </p>
        <br />
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          - Owner Glazer
        </p>
      </div>
    </Container>
  );
};

export default Card2;
