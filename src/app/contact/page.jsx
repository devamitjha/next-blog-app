import "./Contact.scss";
import ProfilePic from "@/assets/images/profile.png";
import StickyBox from "react-sticky-box";
import GoogleContactMap from "@/components/googleContactMap/GoogleContactMap";
import BackgroundShapes from "@/components/backgroundShapes/BackgroundShapes";
import ContactForm from "@/components/contactForm/ContactForm";

export const metadata = {
  title: "Contact Page",
  description: "Contact Page",
};

const Contact = () => {  
  return (
    <div className="container">
      <div className="page-contact">
       
        <div className="contact-section">
          <ContactForm/>
          <div className="container-map">
            {/*type will be "google" or "leaflet"*/}
            <GoogleContactMap type="leaflet"/>
          </div>
        </div>
      </div>
      <BackgroundShapes/>
    </div>
  );
};

export default Contact;

