import React from 'react'
import {Hero, Client, Benefits, Features,Testimonial, WorkSample, Faq} from "../components/index"


function Home() {
  return (
    <>
      <Hero/>
      <Client/>
      <Benefits/>
      <Features/>
      <Testimonial/>
      <WorkSample/>
      <Faq/>
    </>
  )
}

export default Home