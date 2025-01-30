import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Footer from "./footer";

import "./contact-page.css";
import CopyRight from "./copyright-component";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywpwzue', 'template_toqgu4b', form.current, '6MwmRxBHrcsbNZ9VY')
      .then((result) => {
          console.log(result.text);
          setFormData({
            name: '',
            email: '',
            message: ''
          });

          if (result.text === "OK") {
            swal({
              icon: "success",
              title: "Thank you so much. I receive your email!",
              timer: 2000
            });
          } else {
            swal({
              icon: "fail",
              title: "There might be some problem here! Please try again",
              timer: 2000
            });
          }
      }, (error) => {
          console.log(error.text);
          swal({
            icon: "fail",
            title: "There might be some problem here! Please try again later. Meanwhile, you can send direct email to me.",
            timer: 2000
          });
      });
  };

  return (
    <>
      <div className="page-body-contact" id="contact-block">
        <div className="contact-page">
          <div className="placeholder-Image">
            <img src="/programmer.png" alt="Programmer"/>
          </div>

          <div className="contact-form-frame">
          <section>
            <h2>Looking for New Grad/Entry-Level Software Engineer Roles in Texas</h2>
            <p>As a incoming new grad and aspiring software engineer, I am actively seeking entry-level opportunities in Austin, Dallas, and Houston. I have hands-on experience with full-stack development, especially in MERN stacks, MEAN stacks, SpringBoot, CI/CD, deployments through my projects and internships. I am eager to bring my skills to a forward-thinking company and contribute to impactful projects. If you're hiring, let's connect!</p>
          </section>


            {/* <div className="contact-info">
              <a href="mailto:thanhnguyen14.gers@gmail.com?subject=Message%20to%20Thanh%20Nguyen" className="contact-info-detail contact-via-cloud-mail">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
                  </svg>
                </span>
                <b>thanhnguyen14.gers@gmail.com</b>
              </a>
            </div> */}

            <div className="form-manage">
              <h2 className="form-manage-title"><strong>Send me a message!</strong></h2>
              <form className="inbox-form" ref={form} onSubmit={handleSubmit}>
                <div className="row p-4 name-email-box">
                  {/* value={formData.name}  */}
                  <div className="w-50 name">
                    <label htmlFor="name" className="form-label contact-label">Full Name</label>
                    <input type="text" name="name" className="form-control contact-area" id="name" value={formData.name} onChange={handleChange} required/>
                  </div>
                  <div className="w-50 email">
                    <label htmlFor="email" className="form-label contact-label">Email</label>
                    <input type="email" name="email" className="form-control contact-area" id="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="w-100 p-4 box">
                  <label htmlFor="message" className="form-label contact-label">Your Message to Thanh Nguyen!!</label>
                  <textarea name="message" className="form-control contact-area" id="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="start-cv-btn-contact">Send</button>
              </form>
              <h5><i>If this feature not working, please email me directly to thanhnguyen14.gers@gmail.com</i></h5>
              {/* {submitError && <div className="error-message">{submitError}</div>} */}
            </div>

            <div>
              <Footer />
              <CopyRight />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ContactMe;
