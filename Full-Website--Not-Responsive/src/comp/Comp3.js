import React from "react";
import { Container, Image } from "react-bootstrap";
import l1 from "../images/Connect-with-students.svg";
import l2 from "../images/Booking-convenience.svg";
import l3 from "../images/Better-student-experience.svg";

const Comp3 = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          marginTop: "60px",
          background: "#F0FFF0",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            flex: "2",
            border: "1px #fff",
            padding: "10px 40px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <Image src={l1} style={{ padding: "12px 13px" }} />
            Manchester United Football Club is
          </p>
          <p>
            Manchester United Football Club is a professional football club
            based in Old Trafford, Greater
          </p>
        </div>
        <div
          style={{
            flex: "2",
            border: "1px #fff",
            padding: "10px 40px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <Image src={l2} style={{ padding: "12px 13px" }} />
            Manchester United Football Club is a professional
          </p>
          <p>
            Manchester United Football Club is a professional football club
            based in Old Trafford,
          </p>
        </div>
        <div
          style={{
            flex: "2",
            border: "1px #fff",
            padding: "10px 40px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <Image src={l3} style={{ padding: "12px 13px" }} />
            Manchester United Football Club is a professional
          </p>
          <p>
            Manchester United Football Club is a professional football club
            based in Old Trafford, Greater
          </p>
        </div>
      </Container>
    </>
  );
};

export default Comp3;
