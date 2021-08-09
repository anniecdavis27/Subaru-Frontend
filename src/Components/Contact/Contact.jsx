import "./contact.css";
import ContactForm from "../ContactForm/ContactForm";


function Contact() {
  return (
    <div className='Contact'>
      <div className="container">
          <h1 className="title">Contact</h1>
            <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
