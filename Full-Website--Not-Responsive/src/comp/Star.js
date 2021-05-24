import React from "react";
import { Container, Image } from "react-bootstrap";
import l1 from "../images/Apointy-G2-300x100-1-1-min.png";
import l2 from "../images/Appointy-Google-review-min.png";
import l3 from "../images/Artboard-1-copy-1-min.png";
import l4 from "../images/Artboard-1-copy-2-1-min-300x100.png";

const Star = () => {
  return (
    <Container
      style={{
        display: "flex",
        marginTop: "60px",
      }}
    >
      <div style={{ flex: "3" }}>
        <Image
          src={l3}
          style={{
            width: "140px",
          }}
        />
      </div>
      <div style={{ flex: "3" }}>
        <Image
          src={l4}
          style={{
            width: "140px",
          }}
        />
      </div>
      <div style={{ flex: "3" }}>
        <Image
          src={l1}
          style={{
            width: "140px",
          }}
        />
      </div>
      <div style={{ flex: "3" }}>
        <Image
          src={l2}
          style={{
            width: "140px",
          }}
        />
      </div>
    </Container>
  );
};

export default Star;
