import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import border from "../../assets/images/banner-border.png";

const Contact: React.FC = () => {
  return (
<>
    <img
        className="cover-bottom-border"
        src={border}
        width="100%"
        height="120"
        alt="Banner border"
      />
    <div className="container mt-5">

      <h3 className="text-center mb-5">
        We’d love to hear from you! Feel free to reach out using the form below
        or visit us at our location.
      </h3>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Get in Touch</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Visit Us</h5>
              <p>Address: 7 Oakwood Drive, Ballina, Co. Mayo</p>
              <div className="map-container" style={{ height: "400px" }}>
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=7%20Oakwood%20Drive+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
