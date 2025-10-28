import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import members from "../work.json";
import Card from "../components/Cards";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="carousal flex">
        <div className="left flex flex-col pt-24 pl-28 ">
          <h5 className="mb-4">Trusted by 100+ Business</h5>
          <h1>
            <b>Build Systems That Move<br />Ideas Forward.</b>
          </h1>
          <h2> <br />BeeStack is a next-gen technology company crafting intelligent,<br />
            scalable, and future-ready software solutions.<br />
            <br />From connected devices to cloud platforms, we engineer products<br />
            that power the digital future which are fast, reliable, and built to last.
            <br />Whether it's AI-driven automation, or full-stack development,<br />
            We make tech feel seamless.<br /><br /> See what we build. Feel what we solve.
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

        <div className="testimonial-heading">
          <br/>
          <br/>
          <div className="heading pl-28">TESTIMONIALS</div>
          </div>

         <div className="testimonials">
    <div className="testimonial-inner">
      <div className="row">
        <div className="col">
          <div className="testimonial">
            <div className="quote">"</div>
            <div className="name">John Waddrob</div>
            <p>“The professionalism and technical depth at BeeStack are unmatched. We felt like they were part of our own team.”</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="testimonial">
            <div className="quote">"</div>
            <div className="name">John Waddrob</div>
            <p>“BeeStack delivers peace of mind. Reliable, responsive, and focused on real results.”</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>        
          </div>
        </div>
        
        <div className="col">
          <div className="testimonial">
           <div className="quote">"</div>
            <div className="name">John Waddrob</div>
            <p>“BeeStack helped us launch faster than we thought possible — their team truly understands product quality and deadlines.”</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
    </>
  );
};

export default HomePage;
