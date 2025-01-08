import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Siobhan Durkin",
      role: "Skincare Specialist",
      bio: "Siobhan has years of experience helping clients achieve radiant and healthy skin through personalized care.",
      image: "https://via.placeholder.com/150",
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com/profile.php?id=61567629880055",
      email: "siobhan@example.com",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Experts</h1>
      <p className="text-center mb-5">
        Our team of beauty professionals is here to bring out the best version
        of you. Whether it’s skincare, makeup, or haircare, we have the
        expertise to cater to your needs.
      </p>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div
            className="col-md-4 mb-4"
            key={index}
            style={{ alignSelf: "center" }}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={member.image}
                alt={`${member.name}'s photo`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.bio}</p>
              </div>
              <div className="card-footer text-center">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pink text-white mx-1"
                  style={{ backgroundColor: "#E4405F", border: "none" }}
                >
                  Instagram
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mx-1"
                >
                  Facebook
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="btn btn-secondary mx-1"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
