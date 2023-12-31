import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    console.log(formData);
    console.log('Form submitted!');
    e.preventDefault();

    try {
      console.log('Sending form data:', formData); // Log form data for debugging

      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitError(null);
        // Optionally, reset the form or show a success message to the user
      } else {
        const errorData = await response.json(); // Try to parse error details
        console.error('Failed to send email:', response.status, errorData);
        setSubmitError(errorData.message || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError('Network error. Please try again.'); // Set an error message for the user
    }
  };

  return (
    <>
      <div id="page-body">
        <div className="contact-page">
          <div className="placeholder-Image">
            <img src="/programmer.png" alt="Programmer"/>
          </div>
          <div className="contact-info">
            <p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
              <b>(682)-374-8227</b>
            </p>

            <p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
              </span>
              <b>do.t.nguyen@tcu.edu</b>
            </p>
          </div>
          <div className="form-manage">
            <form onSubmit={handleSubmit}>
              <div className="row p-4 name-email-box">
                {/* value={formData.name}  */}
                <div className="w-50 name">
                  <label htmlFor="name" className="form-label contact-label">Full Name</label>
                  <input type="text" name="name" className="form-control contact-area" id="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="w-50 email">
                  <label htmlFor="email" className="form-label contact-label">Email</label>
                  <input type="email" name="email" className="form-control contact-area" id="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="w-100 p-4 box">
                <label htmlFor="message" className="form-label contact-label">Your Message to Thanh Nguyen!!</label>
                <textarea name="message" className="form-control contact-area" id="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send</button>
            </form>
            {submitError && <div className="error-message">{submitError}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
