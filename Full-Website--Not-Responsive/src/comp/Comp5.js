import React from "react";
import { Button, Image } from "react-bootstrap";
import logo1 from "../images/s-1.svg";
import logo3 from "../images/s-3.svg";

const Comp4 = () => {
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
            marginLeft: "120px",
          }}
          src={logo1}
        />
      </div>
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
            marginTop: "0px",
            lineHeight: 1.6,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "left",
            textTransform: "none",
          }}
        >
          Eliminate the scheduling back and forth to empower students to reach
          out whenever they need you
        </h5>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          24x7 online scheduling: Students can easily find a time that works for
          them and book a session or sign-up for recurring classes on their own.
          Confirmed appointments are added to your calendar so that you're never
          double booked!
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          Intelligent timezone detection: Help students & applicants around the
          globe and ensure that everyone who wants to schedule with you can view
          your availability in their timezone.
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          Web conferencing: Offer students to schedule virtual courses, classes
          and admission counselling with Appointy's Zoom integration.
          Automatically send a Zoom meeting or class link in scheduling
          notifications so that students can join your virtual classroom with
          just a click!
        </p>
      </div>
    </div>
  );
};

export default Comp4;
