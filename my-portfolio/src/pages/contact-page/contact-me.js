import React, { useState } from "react";

import CopyRight from "../Routing-Pages/copyright-component";

const ContactMe = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });    

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Email sent successfully');
          // Optionally, reset the form or show a success message to the user
        } else {
          console.error('Failed to send email');
          // Handle error, show error message to the user, etc.
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network error, show error message to the user, etc.
      }
    };

    return (
      <> 
        <div id="page-body">
          <div className="contact-page">
            <div className="placeholder-Image">
              <img src="/programmer.png" alt="Programmer"/>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div class="row p-4 name-email-box">
                  <div class="w-50 name">
                      <label for="firstName" class="form-label contact-label">Full Name</label>
                      <input type="text" class="form-control contact-area" id="firstName" placeholder="Thanh Nguyen" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div class="w-50 email">
                      <label for="email-value" class="form-label contact-label">Email</label>
                      <input type="email" class="form-control contact-area" id="email-value" placeholder="name@example.com"  value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                  
                <div class="w-100 p-4 box">
                    <label for="message" class="form-label contact-label">Your Message to Thanh Nguyen!!</label>
                    <textarea class="form-control contact-area" id="message" rows="3" placeholder="Hello Thanh Nguyen" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" class="btn btn-primary"> Send</button>
              </form>
            </div>
          </div>

          <CopyRight />
        </div>
      </>
    )
}

export default ContactMe;