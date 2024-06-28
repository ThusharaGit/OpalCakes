// import {useState} from 'react'
// import Header from './Header'

// function FAQs({headerComponents}) {
//   const [pageNo,setPageNo] = useState(3)
//     return (
//       <div className='app'>
//       <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
//        FAQs Component
//       </div>
//     )
//   }
  
//   export default FAQs





  // https://www.youtube.com/watch?v=PQtpZZQU0u0

import React from "react";
import Header from './Header'
import { useState } from 'react'


import "./FAQs.css";

// read in database
// import FAQ from "../data/faq.json";
// import data from './assets/data.json'


function FAQs({headerComponents}) {

  const [pageNo,setPageNo] = useState(3)
     

  return (
    <div>
      <div className='app'>
      <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       FAQs Component
      </div>
    





    <div className="home-faq">
      <h1 className="home-faq-title">FAQ</h1>

      {/* hard coded example */}
      <details>
        <summary>Here is the Question ?</summary>
        <div className="home-faq-answer">
          <p>...and here is the answer:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            sequi saepe vero molestiae et pariatur, qui laboriosam eveniet
            eligendi sed.
          </p>
          <ul>
            <li>we care</li>
            <li>we are safe</li>
            <li>we are ...</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1625691782557-f879e60c1105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
            alt="picture of Kayak"
          />
        </div>
      </details>
       {/* faq data provided by json file*/}
       {FAQ &&
        FAQ.map((faq) => {
          return (
            <details>
              <summary>{faq.id}. {faq.question}</summary>
              <div className="home-faq-answer">
                <p>{faq.answer}</p>
                {/* is there a picture in json file for that id ? */}
                {faq.URL !== "" ? <img src={process.env.PUBLIC_URL + faq.URL} alt="faq picture" /> : null}
              </div>
            </details>
          );
        })}
    </div>
    </div>
  );
}

export default FAQs;