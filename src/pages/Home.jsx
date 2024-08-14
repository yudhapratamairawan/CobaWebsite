import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import Tutors from "../components/Tutors.jsx";
import Partner from "../components/Partner.jsx";
import Contact from "../components/Contact.jsx";
import { ContactSection } from "../data/ContactSection.jsx";
import { HomeSection } from "../data/HomeSection.jsx";
import { courseSection } from "../data/CourseSection.jsx";
import { TutorsSection, tutorsList } from "../data/TutorsSection.jsx";
import { PartnerSection, PartnerList } from "../data/PartnerSection.jsx";
import parse from "html-react-parser";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={HomeSection.image} />
          <div className="kolom">{parse(HomeSection.content)}</div>
        </section>
        {/* Online Course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={parse(courseSection.image)} />
        </section>

        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(TutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>

        {/* Partner */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(PartnerSection.content)}</div>
            <Partner PartnerList={PartnerList} />
          </div>
        </section>
      </div>
      <Contact ContactSection={ContactSection} />
      <Footer />
    </>
  );
};

export default Home;
