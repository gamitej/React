import React from "react";
import "./Footer.css";
import logo from "../images/Footer-Element.png";
import { Image } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h5 style={{ color: "black" }}>PRODUCT</h5>
              <br />
              <p className="list-unstyled">
                <li>Home</li>
                <li>Customer</li>
                <li>Contact US</li>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Sign Up</li>
              </p>
            </div>
            {/* Column2 */}
            <div className="col">
              <h5 style={{ color: "black" }}>FEATURES</h5>
              <br />
              <p className="list-unstyled">
                <li>Schedule Online</li>
                <li>Increase productivity</li>
                <li>Attarct customers</li>
                <li>Retain customers</li>
              </p>
            </div>
            {/* Column3 */}
            <div className="col">
              <h5 style={{ color: "black" }}>SUPPORT</h5>
              <br />
              <p className="list-unstyled">
                <li>Help</li>
                <li>Screen sharing</li>
                <li>Affiliate Program</li>
                <br />
                <h5 style={{ color: "black" }}>CONNECT WITH US</h5>
                <br />
                <h5 style={{ color: "black", letterSpacing: "12px" }}>
                  &#9633; &#9633; &#9633;
                </h5>
              </p>
            </div>
            {/* Column4 */}
            <div className="col">
              <h5 style={{ color: "black" }}>CONTACT US</h5>
              <br />
              <p className="list-unstyled">
                <li>
                  <strong> Appointey Software Inc.</strong> 16 Corning
                </li>
                <li>Ave, Suite 136, Milpitas. CA 95035</li>
                <li>contact@appointy.com</li>
                <li>Terms of use</li>
                <li>GDPR</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
