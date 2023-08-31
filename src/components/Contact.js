import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_t7gelmr",
        "template_6vohjoq",
        form.current,
        "cW3Xc0NnKWgExrSo4"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message was sent!");
        navigate(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="home">
      <h3>Contact Page</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={sendEmail} ref={form}>
            <div className="mb-3">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                required
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                cols="10"
                rows="5"
                required
                placeholder="Enter your message"
                className="form-control"
              ></textarea>
            </div>
            <div className="mt-3">
              <input
                type="submit"
                className="btn btn-md btn-primary"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
