import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white text-xs text-center  pt-2 '>
   <footer className='p-2 '> 
    <div className=''>
<h3 >Our application is beyond 
the wave</h3>
<p>Designed to make it easy for developers using a complex API 
allows you to build innovative solutions </p>

<h5 className=''>BLOG DEV</h5>
<p>Comply with Zatca's e-invoicing mandate for transparent 
operations. Following government rules and laws 
(compliance) is crucial. It ensures smooth business 
practices, avoiding tax-related troubles. Stay compliant 
with us!</p></div>
<div className=' '>
    <ul>
    <h6 className='text-bold'>Complyance.io</h6>
    <li>Home</li>
    <li>Product</li>
    <li>What's New</li>
    <li>Pricing</li>
    <li>Business</li>
    <li>Enterprise</li>
    <li>Customer Success</li>
</ul>
<ul>
    <h6 className='text-bold'>About</h6>
<li>Company</li>
<li>Customers</li>
<li>Careers</li>
<li>Press</li>
<li>Blog</li>
<li>Sitemap</li>
<li>Pricing FAQ</li>
</ul>
<ul>
<h6 className='text-bold'>Resourse</h6>
    <li>Help Center</li>
    <li>Forum</li>
    <li>Support</li>
    <li>Developers & API</li>
    <li>Partners</li>
    <li>Events</li>
   
</ul>
<ul>
<h6 className='text-bold'>Learn</h6>
<li>ZATCA  E-Invoicing</li>
<li>ERP Integration</li>
<li>ERP Implementation</li>
<li>ERP Customisation</li>
<li>QR Code 
Generation</li>
</ul>
<ul>
<h6 className='text-bold'>Workflow Solutions </h6>
<li>Phase-1</li>
<li>Phase-2</li>
<li>Booklet</li>

</ul>
</div>

   </footer>
   <hr className="w-full  border-3 border-white "></hr>
<div className='flex  flex-row  '>
    <p>Privacy policy</p>
    <p>
    Terms and conditions
    </p>
    <p>
    Support    
        </p>
        
        <div className='ml-auto'><p  className='  '>
        Copyright 2023 @ compylance.io  
            </p></div>
</div>
    </div>
  )
}

export default Footer
