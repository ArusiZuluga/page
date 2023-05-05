import Header from "../../components/header"
import Form from "../../components/form"
import React from "react";

export default function Contact(){
    return <div>
      <Header></Header>
      <Form></Form>
    </div>
}

if (typeof window !== 'undefined'){
  const Message = document.getElementById('formMessage');
  console.log(Message)
}