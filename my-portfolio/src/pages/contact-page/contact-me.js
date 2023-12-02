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
    </>
)

export default ContactMe;