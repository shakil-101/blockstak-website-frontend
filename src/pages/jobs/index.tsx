"use client";
import AllJobs from "@/components/AllJobs";
import ContactForm from "@/components/ContactForm";
import Locations from "@/components/Locations";
import React from "react";

const index = () => {
  return (
    <div>
      <AllJobs />
      <Locations />
      <ContactForm />
    </div>
  );
};

export default index;
