const ContactMe = () => (
    <> 
        <div class="mb-3">
            <label for="firstName" class="form-label contact-label">First Name</label>
            <input type="text" class="form-control contact-area" id="firstName" placeholder="Thanh Nguyen" />
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label contact-label">Last Name</label>
            <input type="text" class="form-control contact-area" id="lastName" placeholder="Do" />
        </div>
        <div class="mb-3">
            <label for="email-value" class="form-label contact-label">Email address</label>
            <input type="email" class="form-control contact-area" id="email-value" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
            <label for="message" class="form-label contact-label">Your Message to Thanh Nguyen!!</label>
            <textarea class="form-control contact-area" id="message" rows="3" placeholder="Hello Thanh Nguyen"></textarea>
        </div>

        <button class="btn btn-primary" onClick={sendEmail}> Send</button>
    </>
)

function sendEmail() {
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email-value").value;
    const message = document.getElementById("message").value;

    console.log(firstName + " " + lastName + " " + email + " " + message);
    // Create an object with the form data
    const formData = {
      firstName,
      lastName,
      email,
      message
    };

    // Send the form data to the backend (you'll implement this in the next step)
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success (e.g., show a success message to the user)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error (e.g., show an error message to the user)
    });
  }

export default ContactMe;