import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import logo1 from "../images/3.svg";
import logo2 from "../images/Universities-and-Colleges.svg";
import logo3 from "../images/Professors-Teachers.svg";
import logo4 from "../images/Libraries.svg";
import logo5 from "../images/Tutors.svg";
import logo6 from "../images/Student-Services.svg";
import logo7 from "../images/Test-Centers.svg";
import logo8 from "../images/Educational-Events.svg";

const arr = [
  {
    text: "Schools can make class time tables,schedule resources,organize staff & parent meetings,career counseling etc.",
    src: logo1,
    name: "Schools",
  },
  {
    text: "Institutions can schedule academic counseling, advising sessions, applicant interviews, campus tours, courses, and more",
    src: logo2,
    name: "Universities & Colleges",
  },
  {
    text: "Professors can let students book 1:1 classes, doubt clearing sessions, after school activities,project mentoring, and more",
    src: logo3,
    name: "Professors & Teachers",
  },
  {
    text: "Public, school or university Libraries can manage bookings of study rooms, computer systems,hourly reading slots, etc.",
    src: logo4,
    name: "Libraries",
  },
  {
    text: "Tutors can schedule in-person or online classes, market their business, manage students and more",
    src: logo5,
    name: "Tutors",
  },
  {
    text: "Students can schedule on campus tech support, repair works, admin enquiries etc. with student services",
    src: logo6,
    name: "Student Services",
  },
  {
    text: "Test centers can schedule seats, computers, test taking time-slots and more",
    src: logo7,
    name: "Test Centers",
  },
  {
    text: "Institutions can let attendees reserve a seat for science fairs, art exhibitions, seminars, webinars, conferences, etc.",
    src: logo8,
    name: "Educational Events",
  },
];

const Comp2 = () => {
  return (
    <div
      style={{
        marginLeft: "120px",
        marginTop: "60px",
      }}
    >
      <Row>
        {arr.map((p) => (
          <Col sm={12} lg={2} xm={3} className="mx-5 my-3">
            <Card className="border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={p.src} style={{ width: "150px" }} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text
                  style={{
                    textAlign: "left",
                  }}
                >
                  {p.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Comp2;
