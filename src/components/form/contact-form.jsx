import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=c814e65e35f91d68aeeb1b489&id=4752f3479e`;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://gmail.us21.list-manage.com/subscribe/post", {
        method: "POST",
        body: JSON.stringify({
          name: firstName,
          email: email,
          // Add other form data as needed
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.ok) {
        setFirstName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
      <section
        className="contact-area pb-60 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-wrapper mr-65 mb-60">
                <div className="sub-contact-title">
                  <h5 className="contact-title mb-30">Send Us Message</h5>
                </div>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    action="assets/mail.php"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>Name</span>
                          <input
                            type="name"
                            placeholder="Your Name"
                            name="name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-form-input mb-25">
                          <span>Email Id</span>
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="contact-form-input mb-40">
                          <span>Comments</span>
                          <textarea
                            placeholder="Enter Your Message"
                            name="message"
                          ></textarea>
                        </div>
                        <button className="tp-btn" type="submit">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="ajax-response"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="contact-bg mb-60">
                <img
                  src="/assets/img/bg/contact-sub-bg-01.png"
                  alt="contact-bg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
