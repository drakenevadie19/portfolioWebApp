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
            <div className="contact-info">
              <p className="contact-info-detail">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </span>
                <b>(682)-374-8227</b>
              </p>

              <a href="mailto:thanhnguyen14.gers@gmail.com?subject=Message%20to%20Thanh%20Nguyen" className="contact-info-detail contact-via-cloud-mail">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
                  </svg>
                </span>
                <b>thanhnguyen14.gers@gmail.com</b>
              </a>
            </div>

            <div className="form-manage">
              <form ref={form} onSubmit={handleSubmit}>
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
              {/* {submitError && <div className="error-message">{submitError}</div>} */}
            </div>

            <Footer />

            <CopyRight />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ContactMe;
