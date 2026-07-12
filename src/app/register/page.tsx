
"use client"
import { useState } from "react";

import Welcome from "@/components/Welcome"
import RegisterForm from "@/components/RegisterForm";
  export default function Register(){

    const [step,setStep] = useState(1)







    return (
      <>

{step===1  ? <Welcome nextStep={setStep} /> : <RegisterForm previousStep={setStep} />}
      
      </>
    )
  }
