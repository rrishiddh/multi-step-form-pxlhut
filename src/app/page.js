"use client";

import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FinalStep from "./components/FinalStep";
import DarkModeToggle from "./components/DarkModeToggle";

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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

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
  console.log(formData)
  alert('Please Check Console log')
  setIsSubmitDisabled(true);
};

  return (
    <div className="min-h-screen py-12 px-4 ">
      <div className="mx-auto md:w-[80%]  bg-gray-200 dark:bg-gray-800 rounded-lg py-5 text-wrap dark:text-white  relative">
        <h1 className="text-2xl mx-auto font-bold text-center italic hover:underline my-2 max-sm:mt-8">
          Multi-Step Registration Form
        </h1>
        <div className="items-center justify-center mx-auto w-[80%] text-wrap overflow-x-auto ">

        {step === 1 && <Step1 nextStep={nextStep} updateFormData={updateFormData} defaultValues={formData} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} defaultValues={formData} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} defaultValues={formData} />}
        {step === 4 && <FinalStep formData={formData} prevStep={prevStep} isSubmitDisabled={isSubmitDisabled} handleSubmit={handleFinalSubmit} />}
        </div>
      <DarkModeToggle />
      </div>

    </div>
  );
}
