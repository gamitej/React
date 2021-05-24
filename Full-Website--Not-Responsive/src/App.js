import logo from "./images/Appointy-Logo1.svg";
import "./App.css";
import { Image, Button } from "react-bootstrap";
import Header from "./comp/Header";
import Comp1 from "./comp/Comp1";
import Comp2 from "./comp/Comp2";
import Comp3 from "./comp/Comp3";
import Comp4 from "./comp/Comp4";
import Comp5 from "./comp/Comp5";
import Comp6 from "./comp/Comp6";
import Comp7 from "./comp/Comp7";
import Comp8 from "./comp/Comp8";
import Footer from "./comp/Footer";
import add from "./images/1024.png";
import Footer2 from "./comp/Footer2";
import But from "./comp/But";
import Card2 from "./comp/Card2";
import Star from "./comp/Star";

function App() {
  return (
    <div className="App">
      <Header />
      <Comp1 />

      <div
        style={{
          marginTop: "140px",
          textTransform: "none",
        }}
      >
        <h1
          style={{
            textTransform: "none",
          }}
        >
          Academic institutions
        </h1>
        <p>
          Appointy can help businesses and institutions in the education,
          advising and non-profit domain schedule 1:1 sessions, round-robin
          meetings, and group classes
        </p>
      </div>
      <br />
      <Comp2 />
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "180px",
          textTransform: "none",
        }}
      >
        <h1 style={{ textAlign: "left" }}>
          All-in-one education scheduling software that helps you achieve all
          your academic and business goals
        </h1>
        <br />
        <p>
          Appointy's education software takes the friction out of your
          scheduling process and helps you grow your teaching business or
          institute while keeping students as the top priority
        </p>
      </div>
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "180px",
          textTransform: "none",
        }}
      >
        <h1>
          Appointy handles your everyday admin so that you can focus on
          increasing student success
        </h1>
        <br />
        <p>
          Cost-effective education booking software that streamlines end-to-end
          operations, reduces no-shows, and ensures that your staff isn't
          overwhelmed
        </p>
      </div>
      <Comp7 />
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "180px",
        }}
      >
        <h1>
        Manchester United is one of the most popular football clubs in the world, with one of the highest average home attendances in Europe.
        </h1>
        <br />
        <p>
          hat is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum hat is Lorem Ipsum Lorem Ipsum is
          simply dummy text of the printing and typesetting industry Lorem Ipsum
        </p>
      </div>
      <But />
      {/** add image --> 1024.png */}
      <Image src={add} />
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "180px",
          width: "1200px",
        }}
      >
        <h1>
        Man United are happy to shelve plans to sign a new long-term striker this summer amid Edinson Cavani's great form and his contract extension.
        </h1>
        <br />
        <p>
          hat is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum hat is Lorem Ipsum Lorem Ipsum is
          simply dummy text of the printing and typesetting industry Lorem Ipsum
        </p>
      </div>
      <Comp8 />
      <div
        style={{
          marginTop: "120px",
        }}
      >
        <Button
          style={{
            backgroundColor: "white",
            color: "red",
            border: "2px solid red",
            padding: "10px 20px",
            borderRadius: "124px",
          }}
        >
          Learn More
        </Button>
      </div>
      <div
        style={{
          marginTop: "120px",
        }}
      >
        <h1>Manchester United F.C.</h1>
      </div>
      <Card2 />
      <Star/>
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          marginTop: "180px",
        }}
      >
        <h1>
          Try Appionty Education scheducling software and typesetting industry
          Lorem Ipsum{" "}
        </h1>
      </div>
      <Button
        style={{
          backgroundImage:"linear-gradient( to right, purple, red)",
          padding: "15px 30px",
          borderRadius: "124px",
          marginTop: "80px",
        }}
      >
        Sign Up Now!
      </Button>
      <br />
      <p
        style={{
          marginTop: "60px",
        }}
      >
        No credit Card Required! Our Plan is free forever
      </p>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default App;
