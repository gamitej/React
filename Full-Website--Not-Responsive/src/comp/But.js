import React from "react";
import { Container, Button } from "react-bootstrap";

const But = () => {
  return (
    <Container
      style={{
        display: "flex",
        marginTop: "40px",
        color: "black",
        marginBottom: "40px",
      }}
    >
      <div style={{ flex: "4" }}>
        <Button
          style={{
            borderRadius: "24px",
            background: "#F0FFF0",
            color: "black",
          }}
        >
          Multiple Payment Apps
        </Button>
      </div>
      <div style={{ flex: "4" }}>
        <Button
          style={{
            borderRadius: "24px",
            background: "#F0FFF0",
            color: "black",
          }}
        >
          Personal & Work Calender
        </Button>
      </div>
      <div style={{ flex: "4" }}>
        <Button
          style={{
            borderRadius: "24px",
            background: "#F0FFF0",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Vedio Conferencing App
        </Button>
      </div>
    </Container>
  );
};

export default But;
