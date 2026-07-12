"use client"




import { motion } from "framer-motion";
import { ShoppingBasket,Bike,ArrowRight } from "lucide-react";


type ptopType={
  nextStep:(n:number)=> void
}





export default function Welcome({nextStep}:ptopType){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">

      <motion.div
       initial={{ opacity:0,y:-10}}
      animate={{ opacity:1,y:0 }}
      transition={{ duration:0.6}}
      
      
      className="flex items-center gap-3"
      >


<ShoppingBasket className="w-10 h-10 text-green-700" />

<h1 className=" text-4xl md:text-5xl font-extrabold text-green-700 "> ZestyGo</h1> 





      </motion.div>

       <motion.p
        initial={{ opacity:0,y:10}}
      animate={{ opacity:1,y:0 }}
      transition={{ duration:0.6, delay:0.5}}

      className="mt-4 text-lg md:text-xl text-gray-700 max-w-lg">
       
      Your one-stop destination for fresh groceries, organic produce, and daily essentials delivered right to your doorstep.



       </motion.p>


       <motion.div
       
        initial={{ opacity:0,scale:0.9}}
      animate={{ opacity:1,scale:1 }}
      transition={{ duration:0.6, delay:0.5}}

      className="flex items-center justify-center  gap-10 mt-10"

      > 
      <ShoppingBasket className="w-24 h-24 text-green-700" /> 

      <Bike className="w-24 h-24  text-orange-700" />
      
      </motion.div> 


      <motion.button 
       
        initial={{ opacity:0,y:20}}
      animate={{ opacity:1,y:0 }}
      transition={{ duration:0.6, delay:0.8}}
      
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-200 mt-10 cursor-pointer"
      
      onClick={()=>nextStep(2)}
      
      >Next
      <ArrowRight/>
      
      </motion.button>




     
    </div>
  )
}