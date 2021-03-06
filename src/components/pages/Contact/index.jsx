import React from "react";

import { ContactStyles } from "./styles";
import InputForm from "../../InputForm";
import Button from "../../Button";
import TextArea from "../../TextArea";

const Contact = () => {
  return (
    <ContactStyles>
      <form action="/">
        <div className="contact__title">
          <h2>Contact</h2>
        </div>
        <InputForm type="email" name="email" placeholder="Email" />
        <InputForm type="text" name="title" placeholder="Title" />
        <TextArea name="msg" id="msg" cols="30" rows="10" placeholder="Text"/>
        <Button type="submit" text= "Submit" />
      </form>
    </ContactStyles>
  );
};

export default Contact;
