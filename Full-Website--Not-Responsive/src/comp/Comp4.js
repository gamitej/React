import React from "react";
import { Button, Image } from "react-bootstrap";
import logo1 from "../images/s-1.svg";
import logo2 from "../images/s-2.svg";
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
          flexDirection: "column ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            marginTop: "150px",
            lineHeight: 2.8,
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Make it easier for students to find and book 1:1 career counselling
          and academic advising sessions
        </h5>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            Branded online booking system
          </p>
          : Create a professional, multi-lingual booking website for your
          university or institute. Customize it to match your brand - add a
          logo, services or classes you offer, staff portfolios, campus maps,
          etc. to ensure that applicants can schedule with the right staff for
          them.
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          Multi-channel bookings: Share your booking link with students in
          emails, texts, brochures, etc. or let them book campus tours and
          interviews directly from your website with Appointy's website
          integration.
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          Add a 'book now' button your institute's Facebook and Instagram
          profiles to connect with new students and give them an option to book
          an admission assistance call instantly.
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
          src={logo2}
        />
      </div>
    </div>
  );
};

export default Comp4;
