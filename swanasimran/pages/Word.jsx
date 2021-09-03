/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import "../static/hello"
import { Helmet } from "react-helmet";

// const size = window.innerWidth;
// function script start


export default function Word(){
  // useEffect(() => {
  //   var aScript = document.createElement('script');
  //    aScript.type = 'text/javascript';
  //    aScript.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";

  //    document.head.appendChild(aScript);
  //    aScript.onload = () => {

  //    };
  // }, [])
  return (
    
    <React.Fragment>
      {/* <Head>
          <title>Word Page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="style
          sheet" href="style.css" />
        </Head> */}
  <body>          

<section className="strips" sx={{background : "#000"}}>
  <article className="strips__strip" sx={{fontFamily: "body"}}>
    <div className="strip__content">
      <h1 className="strip__title" data-name="Lorem">Intacto</h1>
      {/* <h1 className="strip__title" data-name="Lorem">I</h1> */}
      <div className="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank" style={{color: "white"}}>Know More!</a>
        </p>
      </div>
      
    </div>
    <p className="strip__close">BACK</p>
  </article>
  <article className="strips__strip" sx={{fontFamily: "body"}}>
    <div className="strip__content">
      <h1 className="strip__title" data-name="Ipsum">xStack</h1>
      <div className="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
    <p className="strip__close">BACK</p>
  </article>
  <article className="strips__strip" sx={{fontFamily: "body"}}>
    <div className="strip__content">
      <h1 className="strip__title" data-name="Dolor">UV-BDZ</h1>
      <div className="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
    <p className="strip__close">BACK</p>
  </article>
  <article className="strips__strip"sx={{fontFamily: "body"}}>
    <div className="strip__content">
      <h1 className="strip__title" data-name="Sit">On the Fly</h1>
      <div className="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
    <p className="strip__close">BACK</p>
  </article>
  <article className="strips__strip" sx={{fontFamily: "body"}}>
    <div className="strip__content">
      <h1 className="strip__title" data-name="Amet">Growvy</h1>
      <div className="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
    <p className="strip__close">BACK</p>
  </article>
  
  <i className="fa fa-close strip__close"></i>
</section>

      <Helmet>
          <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
            </Helmet>
            </body>
    </React.Fragment>
    
  
    
  )
}
// const Word = () => (
//   <h1>Hi</h1>

  
// )


