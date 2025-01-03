import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Sophia Taylor",
      role: "Skincare Specialist",
      bio: "Sophia has over 10 years of experience helping clients achieve radiant and healthy skin through personalized care.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
      instagram: "https://www.instagram.com/sophiaskincare",
      facebook: "https://www.facebook.com/sophiaskincare",
      email: "sophia@example.com",
    },
    {
      name: "Emily Johnson",
      role: "Makeup Artist",
      bio: "Emily is a professional makeup artist known for creating stunning looks for every occasion, from weddings to fashion shows.",
      image: "https://via.placeholder.com/150",
      instagram: "https://www.instagram.com/emilymakeup",
      facebook: "https://www.facebook.com/emilymakeup",
      email: "emily@example.com",
    },
    {
      name: "Liam Brown",
      role: "Haircare Expert",
      bio: "Liam is passionate about crafting hairstyles that bring out the best in every client, specializing in color treatments and styling.",
      image: "https://via.placeholder.com/150",
      instagram: "https://www.instagram.com/liamhaircare",
      facebook: "https://www.facebook.com/liamhaircare",
      email: "liam@example.com",
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
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
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
