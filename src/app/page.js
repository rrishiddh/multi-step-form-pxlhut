"use client";

import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function Home() {
  const [step, setStep]= useState(1);
  const [formData, setFormData]= useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
const nextStep =()=>{
  setStep((previous)=> previous+1);
};
const prevStep =()=>{
  setStep((previous)=> previous-1);
};
const updateFormData =(data)=>{
setFormData((previous)=>({ ...previous, ...data }))
}
const handleFinalSubmit = () => {
  console.log("Submitted Data:", formData);
  alert(formData)
};

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="mx-auto w-[60%]  bg-gray-200 border">
        <h1 className="text-2xl font-bold text-center italic hover:underline ">
          Multi-Step Registration Form
        </h1>
        <div className="items-center justify-center mx-auto">
          
        {step === 1 && <Step1 nextStep={nextStep} updateFormData={updateFormData} defaultValues={formData} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} defaultValues={formData} />}

        </div>
      </div>
    </div>
  );
}
