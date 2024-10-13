import React, { useState } from "react";
import FAQ from "../components/FAQ/FAQ";
import NavBar from "../components/NavBar/NavBar";
import HomeAboutImage from "../components/HomeAboutImage/HomeAboutImage";
import SocialIcon from "../components/SocialIcon/SocialIcon";
import Footer from "../components/Footer/Footer";
import Logo from "../assets/images/ACM logo.png";
import ACM_logo from '../assets/images/acm_image_official.png';
import mitaoe_campus from '../assets/images/mitaoe_campus.jpg';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
import gmail from '../assets/images/gmail.png';
import ObjectiveCard from "../components/ObjectiveCard/ObjectiveCard";
import learning from '../assets/images/learning.png';
import careerGrowth from '../assets/images/career_growth.png';
import leadership from '../assets/images/leadership.png';
import networking from '../assets/images/networking.png';
import MembershipCard from "../components/MembershipCard/MembershipCard";

const HomePage = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleFAQClick = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqItems = [
    "What is ACM?",
    "Who can be a member of the ACM student chapter?",
    "Benefits of joining the ACM student chapter?",
    "Vision of ACM?"
  ];

  const objectives = [
    {
      title: "Learning Opportunities",
      description: "Provide excellent learning opportunities through workshops, seminars, and events to enhance knowledge and skills.",
      icon: learning,
    },
    {
      title: "Networking Connections",
      description: "Facilitate networking with professionals and peers to build valuable connections in various industries.",
      icon: networking,
    },
    {
      title: "Leadership Skills",
      description: "Cultivate leadership skills by offering opportunities for members to take on responsibilities and roles in projects and events.",
      icon: leadership,
    },
    {
      title: "Career Growth",
      description: "Foster career growth by offering exposure to emerging technologies and industry trends.",
      icon: careerGrowth,
    },
  ];

  const studentMembershipDetails = [
    {
      detail: "Unlimited access to online learning resources",
      applicable: false
    },
    {
      detail: "Access to the full ACM Digital Library",
      applicable: true
    },
    {
      detail: "Discounted Article Processing Charges (APCs)",
      applicable: true
    },
    {
      detail: "A full year (12 issues) print subscription to Communications of the ACM",
      applicable: false
    },
    {
      detail: "A full year (12 issues) online subscription to Communications of the ACM",
      applicable: true
    },
    {
      detail: "A full-year (4 issues) subscription to XRDS: Crossroads, ACM's Student Magazine",
      applicable: true
    },
    {
      detail: "MemberNet, ACM's quarterly member newsletter",
      applicable: true
    },
    {
      detail: "Student Quick Takes, ACM's quarterly newsletter for students",
      applicable: true
    },
    {
      detail: "TechNews, ACM's tri-weekly email IT news digest",
      applicable: true
    },
    {
      detail: "CareerNews, ACM's twice monthly email career news digest",
      applicable: true
    },
    {
      detail: "Access to ACM Queue, an online magazine for software engineers",
      applicable: true
    },
    {
      detail: "Access to Ubiquity, ACM's IT opinion magazine, and eLearn",
      applicable: true
    },
    {
      detail: "Discounts on ACM journals, magazines, books, conferences, and exclusive pricing on the ACM Books series",
      applicable: true
    },
    {
      detail: "A free email forwarding address with high-quality spam filtering",
      applicable: true
    },
    {
      detail: "Special discounts and access to products and services through ACM's Insurance and Special Offers Programs",
      applicable: true
    },
    {
      detail: "Participation in ACM Distinguished Speakers Program (DSP)",
      applicable: true
    },
    {
      detail: "Voting for ACM Officers (Paid professional members only)",
      applicable: false
    }
  ];

  const professionalMembershipDetails = [
    {
      detail: "Unlimited access to online learning resources",
      applicable: true
    },
    {
      detail: "Access to the full ACM Digital Library",
      applicable: true
    },
    {
      detail: "Discounted Article Processing Charges (APCs)",
      applicable: true
    },
    {
      detail: "A full year (12 issues) print subscription to Communications of the ACM",
      applicable: true
    },
    {
      detail: "A full year (12 issues) online subscription to Communications of the ACM",
      applicable: true
    },
    {
      detail: "A full-year (4 issues) subscription to XRDS: Crossroads, ACM's Student Magazine",
      applicable: false
    },
    {
      detail: "MemberNet, ACM's quarterly member newsletter",
      applicable: true
    },
    {
      detail: "Student Quick Takes, ACM's quarterly newsletter for students",
      applicable: false
    },
    {
      detail: "TechNews, ACM's tri-weekly email IT news digest",
      applicable: true
    },
    {
      detail: "CareerNews, ACM's twice monthly email career news digest",
      applicable: true
    },
    {
      detail: "Access to ACM Queue, an online magazine for software engineers",
      applicable: true
    },
    {
      detail: "Access to Ubiquity, ACM's IT opinion magazine, and eLearn",
      applicable: true
    },
    {
      detail: "Discounts on ACM journals, magazines, books, conferences, and exclusive pricing on the ACM Books series",
      applicable: true
    },
    {
      detail: "A free email forwarding address with high-quality spam filtering",
      applicable: true
    },
    {
      detail: "Special discounts and access to products and services through ACM's Insurance and Special Offers Programs",
      applicable: true
    },
    {
      detail: "Participation in ACM Distinguished Speakers Program (DSP)",
      applicable: true
    },
    {
      detail: "Voting for ACM Officers (Paid professional members only)",
      applicable:true
    }
  ];

  return (
    <>
      {/* Hero section starts */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <NavBar />
          <img src={Logo} alt="ACM-Logo" className="hero-logo" />
        </div>
      </section>
      {/* Hero section ends */}

      {/* About section starts */}
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">Who Are We?</h1>
          <p>
            We see a world where computing helps solve tomorrow’s problems - where we use our knowledge and skills to advance the profession and make a positive impact.
          </p>
          <div className="about-image-container">
            <HomeAboutImage image={mitaoe_campus} imageName="MITAOE Campus" description="This is a view of the MITAOE campus." />
            <HomeAboutImage image={ACM_logo} imageName="ACM Official Image" description="Official ACM logo representation." />
          </div>
        </div>
      </section>
      {/* About section ends */}

      {/* Objective section starts */}
      <section className="objective-section">
        <div className="objective-container">
          <h3>Our Objectives</h3>
          <h1>Creating Pathways to Success</h1>
          <div className="objectives-card-container">
            {objectives.map((objective, index) => (
              <ObjectiveCard
                key={index}
                title={objective.title}
                description={objective.description}
                icon={objective.icon}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Objective section ends */}

      {/* FAQs Section start */}
      <section className="faq-section">
        <div className="faq-overlay">
          <div className="faq-container">
            <div className="faq-content-box">
              <h1>Frequently Asked Question</h1>
              <p>Here’s some questions which are generally asked. It may help you solve your queries. If you still have any issue, feel free to contact</p>
            </div>
            <div className="faq-accordian-box">
              {faqItems.map((question, index) => (
                <FAQ
                  key={index}
                  question={question}
                  isOpen={openFAQIndex === index}
                  onClick={() => handleFAQClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* FAQs section ends */}


      {/* ACM membership types section starts */}
      <section className="acm-memberships-section">
        <div className="acm-memberships-container">
              <h1><span>ACM</span> Memberships</h1>
              <div className="membership-card-container">
                  <MembershipCard title="Student Membership" membershipDetails = {studentMembershipDetails}/>
                  <MembershipCard title="Professional Membership" membershipDetails = {professionalMembershipDetails}/>
              </div>
        </div>
      </section>
      {/* ACM membership types section ends */}


      {/* Join community section starts */}
      <section className="join-community-section">
        <div className="join-community-container">
          <h1>Welcome To <span>Our Community</span></h1>
          <p>Join our community to learn, connect, and innovate. The ACM Student Chapter is your gateway to new skills, industry insights, and lasting connections. Let's grow together!</p>
          <div className="social-icons-container">
            <SocialIcon icon={linkedin} link="#" name="LinkedIn" colorCode="#1B8FC2" />
            <SocialIcon icon={instagram} link="#" name="Instagram" colorCode="#CE4CA2" />
            <SocialIcon icon={whatsapp} link="#" name="Whatsapp" colorCode="#29CC57" />
            <SocialIcon icon={gmail} link="#" name="E-Mail" colorCode="#FE1400" />
          </div>
        </div>
      </section>
      {/* Join community section ends */}

      {/* Footer section starts */}
      <section className="footer-section">
        <Footer />
      </section>
      {/* Footer section ends */}
    </>
  );
};

export default HomePage;
