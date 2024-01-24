import React from 'react'
import AccordionMenu from './AccordionMenu'

function About() {
  return (
    <div>
    <section className="bg-[#02011E] text-white">
  <div className="mx-auto  px-4 py-32 h-[93vh] flex items-center">
    <div className="mx-auto  text-center">
      <h1
        className="text-[#45A8E3] text-[3rem] font-bold w-[58rem]"
      >
       “Elevate Your Digital Horizon with Ibizo: Where Innovation Meets Growth”
      </h1>

      <p className="mx-auto mt-[2rem]  w-[51rem] sm:text-xl/relaxed">
      At Ibizo Technologies, we extend a warm invitation to experienced performance marketers like you to explore new dimensions of success. Our data-driven strategies, AI-powered tools, and advanced analytics are your gateway to unparalleled ROI and a thriving digital future.
      </p>
      <img src="bannerimage1.png" alt="" className='absolute w-[80%] top-[3.2rem] left-[23.6rem] lg:w-[65%] lg:top-[20.9rem] lg:left-[22.3rem] xl:w-[60%] xl:top-[13.2rem] xl:left-[36rem] ' />
      <img src="bannerimage2.png" alt="" className='absolute w-[25%] top-[4rem] left-[-1rem]' />
    </div>

  </div>
</section>

<div className='max-w-[90%] mx-auto flex  mt-[2rem]'>
<div className='flex flex-col w-full '>
          <h1 className='text-[3rem] font-semibold mb-[3rem]'>About Us</h1>
          

          <p className='text-[1rem]  max-w-[100%]'>Get Ready To Welcome a holistic suite of services, combining data-driven strategies, advanced targeting techniques, and seamless integration of cutting-edge analytics, AI-powered tools, and multi-channel strategies. This orchestration encompasses audience segmentation, ad campaign optimisation, content personalisation, conversion rate optimisation, SEM management, affiliate marketing, social media advertising, email marketing automation, and robust analytics and reporting. Ibizo will  maximises ROI, adapts to industry dynamics, optimises marketing budgets, and propels businesses .</p>
        
     </div>
     <div className='my-[3rem] w-full'>
    <img src="image1.png" alt="" className='w-full '/>
     </div>
</div>
<div className='bg-[#EBF4FE] mt-[5rem]'>
<div className=' mx-auto max-w-[90%] grid grid-cols-[37%_minmax(75%,_1fr)_60%] '>

     <div className='flex items-center'>
    <h1 className='text-[2.4rem] font-semibold '>Driving success through innovation</h1>
     </div>
     <div className='mx-[6rem]'>
         
          <p className='my-[2rem] text-[1rem]'>Performance marketing harnesses granular insights to identify high-potential segments, fine-tunes campaigns, and efficiently allocates resources, accelerating sales cycles. It synergies cutting-edge analytics, AI-driven tools, and precise targeting to amplify the visibility of innovative ideas, acting as a catalyst for idea execution and sales acceleration. </p>
<p className='mb-[2rem] text-[1rem]'>
This approach enhances sales acceleration by seamlessly guiding prospects through the sales pipeline, ensuring efficient lead progression. The result is a dynamic interplay of creativity and technical precision, maximising ROI and propelling sales with unparalleled effectiveness in the digital landscape</p>
     </div>
</div>
</div>
     
<div className='mx-auto max-w-[80%] mt-[10rem] mb-[3remm]'>
     <h1 className='text-4xl my-3'>Let’s meet our team</h1>
     <p className='mb-10'>Introducing Our Performance Marketing Maestros, each member is seasoned in performance marketing intricacies to bring you data-infused success.</p>
     <div fl>

     <img src="image2.png" alt="" className='w-full' />
     </div>
</div>
 <div className='flex justify-center mt-[3rem]'>
          <AccordionMenu/>
          </div>
    </div>
    
  )
}

export default About