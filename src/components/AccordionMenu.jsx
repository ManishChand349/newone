import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styled from "styled-components";


const AccordionMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
     <Main>

    <div className="accordion-menu">
      <h1 className="title">Frequently asked questions  </h1>
      <p className="text-[#6C6C6C]">Everything you need to know about the product and billing.</p>
      <div className="accordion-items">
        <AccordionItem
          title="Do payments made by students go directly into the university account?"
          content="Yes, the payments are done directly to the university. Being an informational portal we are just responsible for helping you through your journey of selecting the right university. The fees and any payment related to your course is supposed to be paid to the university on their official website."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="How is GoOnline College different from others ?"
          content="We at GoOnline College are a one-stop solution for all who wish to pursue their higher education via online universities. We believe selecting the right university is the first step to achieving your career goals. This is why we :"
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <AccordionItem
          title="What are GoOnline College Advantages?"
          content="Advance Webinars, Networking Sessions With Decision Makers, Live projects & sessions, Placement assistance."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
        <AccordionItem
          title="Can there be errors on GoOnline College?"
          content="The eligibility criteria may differ from one university to another. Generally, the minimum eligibility criteria for a online BCA degree course is 45-55% marks in aggregate at 10+2 level (or equivalent) with Mathematics as a core subject."
          isActive={currentlyActive === 4}
          onClick={() => handleAccordionClick(4)}
        />
        <AccordionItem
          title="Are there any fees/charges for GoOnline College Services?"
          content="GoOnlineCollege Services are always free of cost as we get benefitted from your good placements. We get paid by HR’s of different companies 🙂 GoOnline College will never ask you to pay in cash or share your OTP, ATM PIN, card number, CVV, expiry date, UPI VPA/MPIN with anyone via message, call and email. We only promote payments on the respective universities/institutes’ websites."
          isActive={currentlyActive === 5}
          onClick={() => handleAccordionClick(5)}
        />          
      </div>
    </div>
    </Main>

  );
};

export default AccordionMenu;
const Main = styled.div`
.accordion-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100dvb;
  margin-top: 20px;
  margin-bottom: 20px;
}

h1.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  color: #171717;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}

.accordion-items {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: flex-start;
  gap: 15px;
  max-width: 80%;
  margin: auto;
}

.accordion-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 600px; */
  padding: 20px;
  border-radius: 15px;
  padding-left: 72px;
  background-color: white;
  cursor: pointer;
  transition: 0.25s background-color;
}

.accordion-item.active {
  background-color: #f2f8fe;
}

h1.accordion-tile {
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

p.accordion-content {
  max-height: 0;
  overflow: hidden;
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  transition: 0.5s max-height, 0.5s margin;
}

p.accordion-content.active {
  max-height: 4.3rem;
  margin: 1rem 0;
}

.icon-container {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: 2;
  border-radius: 39px;
  transform: translateX(-3rem) translateY(0.25rem);
  padding: -0.5rem;
  transition: background-color 0.5s, box-shadow 0.5s;
}

.icon-container.active {
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.stroke-one,
.stroke-two {
  content: "";
  position: relative;
  z-index: 1;
  transition: 0.5s all;
}

.stroke-one {
  width: 3px;
  height: 12px;
  background-color: #000;
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(0deg);
}
.stroke-one.active {
  transform: translateX(calc(12px / 2 - 1.5px)) rotate(90deg);
}
.stroke-two {
  height: 3px;
  width: 12px;
  background-color: #000;
  transform: translateY(calc(-12px / 2 - 1.5px));
}

@media (max-width: 768px){
  h1.title{
    font-size: 2rem;
    width: 400px;
    text-align: center;
    
  }
}

@media (max-width: 425px){
  h1.title{
    font-size: 1.3rem;
    width: 300px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
    /* font-weight: 500; */
}
p.accordion-content {
 
  font-size: 0.7rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
@media (max-width: 375px){
  h1.title{
    font-size: 1rem;
    width: 200px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
    /* font-weight: 500; */
}
p.accordion-content {
 
  font-size: 0.7rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
@media (max-width: 320px){
  h1.title{
    font-size: 1rem;
    width: 200px;
    text-align: center;
  }
  .accordion-item{
    padding: 0;
  }
  .accordion-menu {
    padding: 50px 0px;
  }
  h1.accordion-tile {
    color: #000;
    font-size: 12px;
}
p.accordion-content {
  font-size: 0.8rem;
  font-weight: 300;
  
}
.icon-container {
       margin-left: 15px;
       margin-bottom : 19px;
       width: 9px;
       height: 9px;
}
}
`