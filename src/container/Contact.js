import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div className="teks-contact">
        <h1>
          If You are Interested in Ordering <br /> Please Contact us :
        </h1>
      </div>
      <div className="form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="input" type="text" placeholder="Name" />
            <Form.Control className="input" type="email" placeholder="Email" />
            <Form.Control
              className="input"
              type="email"
              placeholder="Website URL"
            />
            <textarea className="input1" placeholder="Your message"></textarea>
            <Form.Check
              className="input"
              type="checkbox"
              label="Check me out"
            />
            <Button className="input2" variant="primary" type="submit">
              Send
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="desc">
        <div>
          <h5>
            Adress: HudzevResto,Jl.Imogiri timur km
            07,Wirokerten,Banguntapan,Bantul,DIY
          </h5>
          <h5>Contact Person: +6283876913783</h5>
          <h5>Website: https://hudzev-resto.netlify.com</h5>
          <h5>Email: Hudzaifah1610@gmail.com </h5>
          <h5>Facebook: Ibnu Ahmad Al Jugjawy</h5>
          <h5>Instagram: hdzfh_1610</h5>
          <h5>Telegram: Hudzaifah Al-Jugjawy</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
