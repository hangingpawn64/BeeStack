import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const GettingIn = () => {
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
            <li className="highlighted font-bold">
              <Link to="/careers/getting-in">Getting in</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/careers/current-openings">Current Openings</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>A Great Place for Top Talent</b>
          </p>
          <h1>Getting In</h1>
          <div className="section">
            <p>
              At BeeStack, we’re a team of builders who love turning ideas into
              products that matter.If you’re curious, hands-on, and passionate
              about technology you’ll fit right in.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">💡Who We’re Looking For</h2>
            <p>We’re not hiring job titles we’re hiring mindsets.</p>
            <p>
              <ul className="list-disc list-inside">
                <li>
                  Curious by nature – You love exploring how things work and
                  learning what’s next.
                </li>
                <li>
                  Hands-on – You enjoy building, debugging, and improving
                  systems.
                </li>
                <li>
                  Adaptable – You thrive outside your comfort zone and learn
                  quickly.
                </li>
                <li>
                  Driven – You take initiative and see challenges as
                  opportunities.
                </li>
                <li>Collaborative – You own your work but value teamwork</li>
                <li>
                  Quality-focused – You care about clean design, structure, and
                  performance.
                </li>
                <li>
                  Builder mindset – You like seeing your code ship and make an
                  impact.
                </li>
              </ul>
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">⚙️ How It Works</h2>
            <p>
              Our hiring process is simple and transparent-
              <ol className="list-decimal list-inside">
                <li>
                  Apply – Send us your resume or portfolio that best reflects
                  your work.
                </li>
                <li>
                  Online Test – A short technical and problem-solving assessment
                  in your preferred language.
                </li>
                <li>
                  Programming Challenge – A hands-on task designed to see how
                  you think and code.
                </li>
                <li>
                  Interviews – 2–3 discussions with our engineers about code,
                  design, and problem-solving.
                </li>
                <li>
                  Culture Fit – We look for curiosity, ownership, and
                  collaboration.
                </li>
                <li>
                  Offer – If it’s a match, we move fast. Expect a decision in
                  just a few days.
                </li>
              </ol>
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">🚀 What to Expect</h2>
            <p>
              We value people who love building and learning. At BeeStack,
              you’ll:
              <ul className="list-inside list-disc">
                <li>Work on real products that reach real users.</li>
                <li>Collaborate with smart, motivated teammates.</li>
                <li>
                  Have the freedom to experiment, fail fast, and grow faster.
                </li>
              </ul>
            </p>
          </div>
          <div className="section">
            <p>
              ✉️ Join the Hive<br/>We’re always on the lookout for passionate
              engineers, designers, and creators.<br/>Check out our Open Positions
              or just drop us a message if you think you belong here.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default GettingIn;
