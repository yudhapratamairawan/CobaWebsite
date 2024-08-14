import "../styles/Contact.css";
import parse from "html-react-parser";

const Contact = (props) => {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.ContactSection.map((item, index) => {
            return (
              <div className="footer-section" key={index}>
                {parse(item.content)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
