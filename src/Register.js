import './App.css';
import React, { useEffect, useState } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SITE_KEY = "6LeK3F0cAAAAAELH7R-yCDyDuKuK57DnNRqUmh6C";

function Register(){

  const [fullName, setFullName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [department, setDepartment] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [resType, setResType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [formVisible,setFormVisible] = useState(true)
  const submitForm = (event) => {
    console.log('submit form')
    event.preventDefault();
    setIsLoading(true);
    //console.log(user);

    // if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
    //   setError("Enter a valid Email");
    //   setTimeout(() => {
    //     const unsu = setError(null);
    //     return unsu;
    //   }, 5000);
    //   setIsLoading(false);
    //   return;
    // }
    // if (contactNum.length !== 10) {
    //   setError("Mobile Number should be of 10 digits");
    //   setTimeout(() => {
    //     const unsu = setError(null);
    //     return unsu;
    //   }, 5000);
    //   setIsLoading(false);
    //   return;
    // }
    
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          console.log("Token", token);
          sendData(token);
        });
    });
  };

  const sendData = (token) => {
    // let formData = new FormData();


    // formData.entr

    let formData = {
      "email":email,
      "name":fullName,
      "year":year,
      "roll_no":roll,
      "contact_number":contactNum,
      "department":department,
      "g-recaptcha-response":token,
    }

    console.log('form Data',formData)
    // return
    
    var config = {
      method: "post",
      // url: "https://ccaaudition.ccanitd.in/api/auditions",
      url: "https://ccaaudition.ccanitd.in/api/registrionscc244b9737c2b6ef26bd0f7827653c9d27c10b7c",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios(config)
      .then(function (response) {
        //console.log("axios", response.data);
        if (response.status == 201) {
          setResType("success");
        } else {
          let r = response.data;
          console.log('response of api call',r);
          if (email != r.email && r.email != null) {
            setResType("exists");
          } else if (contactNum != r.contact_number && r.contact_number != null) {
            setResType("exists");
          }  else {
            setResType("error");
          }
        }
        setIsLoading(false);
        setIsOpen(true);
      })
      .catch(function (error) {
        //console.log(error);
        setResType("error");
        setIsLoading(false);
        setIsOpen(true);
      });
  };

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document?.body?.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        //console.log("Script loaded!");
      }
    );
  }, []);



    return (
        <>
    <div className='learn container pb-5'>
    <div className='description'>
        <h2 className='pb-3'>Register Yourself</h2>
        <p className='descTxt pb-3'>The workshop is free to attend and is available only for students of NIT Durgapur.</p>
      </div>
      
      <Form onSubmit={e=>submitForm(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="text" 
           onChange={(text)=>{setFullName(text.target.value)}} 
            value={fullName}
          placeholder="Enter full name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Roll No</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="text"
              onChange={(text)=>{setRoll(text.target.value)}} 
            value={roll}
           placeholder="Enter Roll No" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="email" 
          onChange={(text)=>{setEmail(text.target.value)}}
          value={email}
          placeholder="Enter email address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control style={{backgroundColor:"#F5F5F5"}} type="tel" 
          onChange={(text)=>{setContactNum(text.target.value)}}
          value={contactNum}
          placeholder="Enter phone number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Department</Form.Label>
          <Form.Select style={{backgroundColor:"#F5F5F5"}} 
          onChange={(text)=>{setDepartment(text.target.value)}}
          value={department}
          defaultValue="Choose...">
            <option>Select department</option>
            <option>Computer Science and Engineering</option>
            <option>Electronics and Communication Engineering</option>
            <option>Electrical Engineering</option>
            <option>Chemical Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Metallurgical and Materials Engineering</option>
            <option>Biotechnology</option>
            <option>Integrated Chemistry</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Year of Study</Form.Label>
          <Form.Select style={{backgroundColor:"#F5F5F5"}} 
          onChange={(text)=>{setYear(text.target.value)}}
          value={year}
          defaultValue="Choose...">
            <option>Select year of study</option>
            <option>1st Year</option>
            <option>2nd Year</option>
          </Form.Select>
        </Form.Group>
      </Row>

      

      <Button className='regBtn mt-3' variant="primary" type="submit">
        Submit
      </Button>

      
    </Form>
    </div>
        </>
    )
}

export default Register;