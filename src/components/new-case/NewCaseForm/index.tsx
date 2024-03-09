"use client";
import React, { useState } from "react";
import { ContactCard, Label } from "..";
import {
   CallIconNewCase,
   LocationIconNewCase,
   MailIconNewCase,
} from "@/components/icons";
import InvestigationChip from "../InvestigationChip";
import axios from "axios";
import { ContactUs } from "@/components/home";
const NewCaseForm = () => {
   const [loading, setLoading] = useState(false);
   const [submitSuccess, setSubmitSuccess] = useState(false);

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      investigationType: [] as string[], // Explicitly define as string array
      date: "",
      budget: "",
      message: "",
   });

   const handleClick = (title: string) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         investigationType: [...prevFormData.investigationType, title],
      }));
   };
   const resetForm = () => {
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         investigationType: [],
         date: "",
         budget: "",
         message: "",
      });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
         setLoading(true);

         const response = await axios.post("/api/new-case", formData);
         setSubmitSuccess(true);
         resetForm();
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };
   return (
      <div className="animate__fadeInUp animate__animated animate__delay-500ms">
         {/* form */}
       <ContactUs/>
      </div>
   );
};

export default NewCaseForm;
const investigationOption = [
   "Missing Persons",
   "Fraud",
   "Unknown Death",
   "Hacking",
   "Harassment",
   "Romance Scam",
];
