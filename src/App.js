import react from "react";
import "./App.css"
import logo from './images/logo.svg'
import babepicture from './images/1.png'
import manwoman from './images/2.png'
import yellowlogo from './images/3.png'
import dollarsignlogo from './images/4.png'
import purpleimage from './images/5.png'
import speedometer from './images/6.png'
import customerimages from './images/customlogos.png'
import culturephoto from './images/7.jpg'
import diversityphoto from './images/10.png'
import experiencephoto from './images/9.jpg'
import teamphoto from './images/8.jpg'







const App = () => {
  return (
    <div className="Main">
      <div className="Header">
        <div className="Header-holder">
          <div> 
            <img src={logo} className='Logo'/>
          </div>
          <div className="Navigationbar">
            <p>Products</p>
            <p>Platforms</p>
            <p>Resources</p>
            <p>Company</p>
            <p>Support</p>
            <p>Our Customers</p>
          </div>
        </div>
      </div>

      <div className='Babeholder'>
        <div className='Babewrapper'>
          <div className='left'>
              <h1 className='Bigtext1'>Delight made </h1>
              <h1 className='Bigtext2'>easy</h1>
               <div className='smalltextset'>
               <p className='Smalltext'>We make it fast and easy for your business to delight customers and employees</p>
            </div>
              <div className='buttons'>
              <button className='butn1'>FREE TRIALS</button>
              <button className='butn2'>CONTACT SALES</button>
              </div>
            
          </div>
          <div>
            <img src={babepicture} className='babe'/>
          </div>

        </div>

      </div>

        <div className='phase2'>
           <img src={manwoman } className='couple'/>
         <div className='phase2contents'>
           <h1 className='phase2fonts'>Try the business software used by over 50,000 
             companies across the globe to exceed customer
              and employee expectations.
            </h1>
            <div className='phase2buttons'>
             <div className='clickbuttons1'>
               <button className='btn1'>Customer Relationship</button>
               <button className='btn2'>IT Mnanagement</button> 
             </div>
             <div className='clickbuttons2'>
                 <button className='btn3'>HR Management</button>
                 <button className='btn4'>Sales Automations</button>
             </div>
             <div className='clickbuttons3'>
                <button className='btn5'>Automated Marketing</button>
                <button className='btn6'>All Products and Trials</button>
             </div>
            </div> 
          </div>
        </div>

       <div className='phase3holder1'>
          <h1 className='phase3bigtext'>Frictionless, simple, easy</h1>
          <h2 className='phase3smalltext1'>Freshworks makes it fast and easy for businesses
           to delight their customers and employees.</h2>
           <h2 className='phase3smalltext2'> We take a fresh approach to how businesses discover,
            engage with, and realize value from software throughout their journey.</h2>

          <div className='phase3sub'>
            <div className='sub1'>
              <img src={yellowlogo} className='yellowimage'/>
              <p className='p1'>Get up and running with no barriers</p>
              <p className='p2'>Try or purchase our software directly from our website, 
                and onboard in a matter of days, not months</p>
              <p className='p3'>Start free trial +</p>
            </div>
            
            <div className='sub2'>
              <img src={dollarsignlogo} className='dollarsign'/>
              <p className='p4'>Choose your pricing plan</p>
              <p className='p5'>Our pricing plans are designed for modern business use 
              cases and affordable for organizations of all sizes.
              </p>
              <p className='p6'>See pricing +</p>
            </div>


          </div>

          <div className='phase3subB'>
            <div className='subB1'>
              <img src={purpleimage} className='purplelogo'/>
              <p className='p7'>Build and customize as you go</p>
              <p className='p8'>Extend and tailor experiences to meet your
                 unique business needs, with low-code 
                development and over 1,100 custom app
                s made available on our marketplace.
              </p>
              <p className='p9'>Visit marketplace +</p>
            </div>

            <div className='subB2'>
              <img src={speedometer} className='speedometerlogo'/>
              <p className='p10'>Create value, fast</p>
              <p className='p11'>Accelerate your team’s productivity and efficiency with modern automation 
                and collaboration tools, to get tangible results in no time.
              </p>
              <p className='p12'>Learn how +</p>
            </div>
            



          </div>


      </div>

      <div className='phase4'>
        <div className='phase4text'>
          <p className='phase4bigtext'>Trusted by 50K+ customers big and small</p>
          <p className='phase4smalltext'>We are a leading provider of modern SaaS 
          solutions that solve multiple, complex business problems to companies of all sizes.
           Businesses from more than 120 countries around the world use Freshworks’
           products to delight their customers and employees every day. </p>
        </div>

      </div>
      <div className='partnercompanies'>
         <img src={customerimages} className='customerlogos'/>
      </div>
      <div className='phase5'>
        <div className='phase5bigtext'>
          <h1>"W@terstones"</h1>
          <p className='phase5smalltext'>“The Freshworks team was a great asset during implementation
            and continue to be a key partner for
             Waterstons as we look to further mature and improve our services to customers,
             tailored to their specific needs.”
          </p>
          <p className='phase5mediumtext'>Alex Bookless, Head of Managed Services, Waterstons</p>

        </div>
      </div>

      <div className='phase6'>
        <div classname='phase6textcontainer'>
            <h1 className='phase6bigtext'>We aspire to be one of the most loved companies in the world</h1>
        </div>

        <div className='phase6imageholder'>
          <div className='culture'>
              <img src={culturephoto} className='cultureimage'></img>
               <p className='culturebigtext'>Culture</p>
               <p className='culturesmalltext'>A culture that supports 
                 high-quality work, joy and pride in that work,
                 speed to execution, and intense customer focus.
              </p>
          </div>
          <div className='diversity'>
              <img src={diversityphoto} className='diversityimage'/>
              <p className='diversitybigtext'>Diversity</p>
              <p className='diversitysmalltext'>Full-spectrum diversity, equity, and
                     inclusion are key priorities for us.</p>
          </div>
          <div className='experience'>
                <img src={experiencephoto} className='experienceimage'/>
                <p className='experiencebigtext'>Experience</p>
                <p className='experiencesmalltext'>Focus on enhancing the team experience by strengthening 
                  our managers’ leadership capabilities</p>
          </div>
          <div className='team'>
              <img src={teamphoto} className='teamimage'/>
              <p className='teambigtext'>Team</p>
              <p className='teamsmalltext'>4,000 employees and growing in offices across India,
                 US, Europe, and Australia.</p>
          </div>
        </div>
        
      </div>
      
      <div className='phase6button'>
          <button className='phase6btn'>SEE LIFE AT FRESHWORKS</button>
      </div>

      <div className='phase7'>
          <p className='phase7bigtext'>Ready to get started?</p>
          <p className='phase7smalltext'>Join our community of 50,000+ companies of all
           sizes who use Freshworks’ modern SaaS products to
           make it fast and easy to delight their customers and employees.</p>
      </div>

      <div className='phase7button'>
        <button className='phase7btn'>CONTACT SALES</button>

      </div>

      <div className='phase8'>
          <div className='phase8holder'>
              <div className='freshwk'>
                <img src={logo} className='endinglogo'/>
                <ul className='listleft'>
                  <li>freshdesk</li>
                  <li>freshsales</li>
                  <li>freshmarketer</li>
                  <li>freshteam</li>
                  <li>freshservices</li>
                </ul>
              </div>
              <div className='company'>
                  <p className='bigcompanytext'>Company</p>
                  <ul className='companylist'>
                    <li>About</li>
                    <li>leadership</li>
                    <li>Board of Directors</li>
                    <li>Investors</li>
                    <li>Affiliates</li>
                    <li>Partners</li>
                    <li>Philanthropy</li>
                    <li>careers</li>
                    <li>News room</li>
                    <li>GDPR</li>
                    <li>Customers</li>
                    <li>Tax FAQs</li>
                    <li>Contact Us</li>
                  </ul>
              </div>
              <div className='connect'>
                <p className='bigconnecttext'>Connect with us</p>
                <div className='socialicons'>
                  {/* <img src={fb} className='fbicon'/>
                  <img src={twit} className='twiticon'/>
                  <img src={linkedin} className='linkedinicon'/> */}

                </div>
              </div>

          </div>

      </div>

      <div className='phase9'>
        <div className='footerleft'>
          <p>Terms of service-</p>
          <p>Privacy notice-</p>
          <p>Takedown policy-</p>
          <p>GDPR-</p>
          <p>Security-</p>
          <p>CSR Policy-</p>
          <p>Tax FAQs-</p>
          <p>Unsubscribe-</p>

        </div>
        <div className='footerright'>
          <p>Copyright freshworks Inc. All Rights Reserved</p>

        </div>

      </div>
      



    </div>

  )



}

export default App