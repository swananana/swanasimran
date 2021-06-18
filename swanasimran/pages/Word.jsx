/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import Link from 'next/link'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';

// const size = window.innerWidth;

export default function Word(){
  return (
  <section class="strips">
  <article class="strips__strip">
    <div class="strip__content">
      <h1 class="strip__title" data-name="Lorem">Awesome</h1>
      <div class="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
      </div>
      
    </div>
  </article>
  <article class="strips__strip">
    <div class="strip__content">
      <h1 class="strip__title" data-name="Ipsum">Words</h1>
      <div class="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
  </article>
  <article class="strips__strip">
    <div class="strip__content">
      <h1 class="strip__title" data-name="Dolor">Go</h1>
      <div class="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
  </article>
  <article class="strips__strip">
    <div class="strip__content">
      <h1 class="strip__title" data-name="Sit">Inside</h1>
      <div class="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
  </article>
  <article class="strips__strip">
    <div class="strip__content">
      <h1 class="strip__title" data-name="Amet">Here</h1>
      <div class="strip__inner-text">
        <h2>Ettrics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <a href="https://twitter.com/ettrics" target="_blank"><i class="fa fa-twitter"></i></a>
        </p>
      </div>
    </div>
  </article>
  <i class="fa fa-close strip__close"></i>
</section>
    
  )
}
// const Word = () => (
//   <h1>Hi</h1>

  
// )


