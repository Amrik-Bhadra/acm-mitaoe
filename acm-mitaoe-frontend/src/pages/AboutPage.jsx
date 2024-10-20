import { useState } from 'react';
import '../styles/AboutPage.css'; // Import the CSS file
import NavBar from "../components/NavBar/NavBar";
import sample from "../assets/images/testing about photo.jpg"



const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { 
      title: 'Vision of the Club', 
      content: 'Our vision is to create an inclusive environment where members can grow and innovate together.',
      boxText: 'Vision of Club',
      colorClass: 'background-vision'
    },
    { 
      title: 'Mission of the Club', 
      content: 'Our mission is to empower members through collaborative activities and projects that drive creativity and leadership.',
      boxText: 'Mission of Club',
      colorClass: 'background-mission'
    },
    { 
      title: 'Activities', 
      content: 'We organize workshops, hackathons, and events that help members enhance their skills and network with industry professionals.',
      boxText: 'Activities',
      colorClass: 'background-activities'
    },
    { 
      title: 'About Club Coordinator', 
      content: 'The club is led by our experienced coordinator who ensures smooth functioning and guides the team to achieve its goals.',
      boxText: 'Club Coordinator',
      colorClass: 'background-coordinator'
    },
    { 
      title: 'Core Team Members', 
      content: 'Our core team is composed of passionate individuals dedicated to driving the success of our club.',
      boxText: 'Core Team',
      colorClass: 'background-team',
      isCoreTeam: true // Flag to render core team images
    }
  ];

  const handleScroll = (event) => {
    const { scrollTop, clientHeight } = event.target;
    const sectionIndex = Math.floor(scrollTop / clientHeight);
    setActiveSection(sectionIndex);
  };

  return (
    <div className="about-us-container">
      {/* Sidebar / Content */}
      <NavBar />
      <div className="about-us-content">
        <h1 className="section-title">{sections[activeSection].title}</h1>
        <p className="section-description">
          {sections[activeSection].content}
        </p>

        {/* Render Core Team Members if the section is active */}
        {sections[activeSection].isCoreTeam && (
          <div className="team-images-container">
            <div className="team-image"><img src={sample} alt="Team Member 1" /></div>
            <div className="team-image"><img src={sample} alt="Team Member 2" /></div>
            <div className="team-image"><img src={sample} alt="Team Member 3" /></div>
            <div className="team-image"><img src={sample} alt="Team Member 4" /></div>
            <div className="team-image"><img src={sample} alt="Team Member 5" /></div>
            <div className="team-image"><img src={sample} alt="Team Member 6" /></div>
          </div>
        )}
      </div>

      {/* Color changing background and box */}
      <div className="about-us-right" onScroll={handleScroll}>
        {sections.map((section, index) => (
          <section
            key={index}
            className={`about-us-section ${section.colorClass}`}
          >
            <div className="section-box">
              <span>{section.boxText}</span>
              {/* <img src='../assets/images/testing about photo.jpg'></img> */}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
