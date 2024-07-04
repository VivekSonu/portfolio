"use server";
import { error } from "console";
import {Resend} from "resend";
const resend=new Resend(process.env.Resend_API_KEY);

const validateString=(value:unknown)=>{
    if(!value||typeof value !=="string")
       { return false;}
    return true;
}

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  // if(!message||typeof message !== "string"){
  //     return {
  //         error:"Invalid message"
  //     };
  // }

  //simple server side validation
  if (!validateString(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "viveksonu37@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
}; 
