import React from "react";
import { Button, Image } from "react-bootstrap";
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
            marginTop: "0px",
            lineHeight: 1.6,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            textTransform: "none",
          }}
        >
          Personalize sessions based on student's needs and elevate their
          experience & satisfaction
        </h5>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 16,
            textAlign: "left",
          }}
        >
          Dedicated student profiles: Collect important student information like
          contact details, classes attended, payments, etc. under student
          profiles. Use notes to make quick remarks about weak subjects, career
          analysis, etc. to communicate progress reports to parents regularly.
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 16,
            textAlign: "left",
          }}
        >
          Intake forms: Collect crucial info at the time of enrollment using our
          intake forms to prepare better lesson plans and consultation notes
          before your sessions.
        </p>
        <p
          style={{
            marginLeft: "180px",
            marginRight: "180px",
            fontSize: 16,
            textAlign: "left",
          }}
        >
          Online Reputation Management: Automatically request reviews from happy
          parents and students after a session. Promote these positive reviews
          on your social media and display them on your booking page with just a
          click.
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
          src={logo3}
        />
      </div>
    </div>
  );
};

export default Comp4;
