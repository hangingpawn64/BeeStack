import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import members from "../work.json";
import Card from "../components/Cards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="carousal flex">
        <div className="left flex flex-col pt-24 pl-28 ">
          <h5 className="mb-4">Trusted by 100+ Business</h5>
          <h1>
            <b>
              Build Systems That Move
              <br />
              Ideas Forward.
            </b>
          </h1>
          <h2>
            <br />BeeStack is a next-gen technology company crafting intelligent,
            <br />
            scalable, and future-ready software solutions.
            <br />
            <br />From connected devices to cloud platforms, we engineer products
            <br />
            that power the digital future which are fast, reliable, and built to
            last.
            <br />Whether it's AI-driven automation, or full-stack development,
            <br />We make tech feel seamless.
            <br />
            <br /> See what we build. Feel what we solve.
          </h2>
          <div className="buttons">
            <button type="button" className="btn consultation">
              <b>Get A Free Consulation</b>
            </button>
            <button type="button" className="btn services">
              <b>Our Services</b>
            </button>
          </div>
        </div>
      </div>

      <div className="whatwedo">
        <div className="heading pl-28">WHAT WE DO</div>
      </div>

       <div className="card-grid">
          {members.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              description={member.description}
              photo={member.photo}
            />
          ))}
        </div>
    </>
  );
};

export default HomePage;
