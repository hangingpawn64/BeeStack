import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CurrentOpenings = () => {
  return (
    <>
      <Navbar />
      <div className="heading pl-28">CAREERS</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/careers">Why BeeStack?</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/careers/getting-in">Getting in</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/careers/current-openings">Current Openings</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>A Great Place for Top Talent</b>
          </p>
          <h1>Current Openings</h1>
          <div className="section">
            <p>
              At BeeStack, we’re driven by technology, creativity, and
              curiosity.We believe the best products come from hands-on builders
              — people who love exploring, experimenting, and pushing
              boundaries. Our structure is flat, our culture is open, and our
              environment is built for growth. We’re always on the lookout for
              passionate engineers who love to build, break, and rebuild things
              better. If you thrive on solving hard problems, learning fast, and
              shipping real products you’ll fit right in.
            </p>
            <p>
                We’re Currently Hiring For
                <ul className="list-inside list-disc">
                    <li><u><Link to="/jobs/Android">Software Engineer – Android </Link></u></li>
                    <li><u><Link to="/jobs/ios">Software Engineer – iOS </Link></u></li>
                    <li><u><Link to="/jobs/webfrontend">Software Engineer – Web Frontend </Link></u></li>
                    <li><u><Link to="/jobs/webbackend">Software Engineer – Backend / Full Stack </Link></u></li>
                </ul>
            </p>
          </div>
          <div className="section">
            <p>If you’re experienced in creating and shipping high-performance applications — mobile or web — we’d love to hear from you.<br/>
            📩 How to Apply:<br/>Send your resume to <u><a href="careers@beestack.com">careers@beestack.com</a></u></p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CurrentOpenings;
