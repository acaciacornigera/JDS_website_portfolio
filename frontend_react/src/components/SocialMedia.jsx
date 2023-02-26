import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
//import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/jdsidler/" target="blank">
        <BsLinkedin />
      </a>
    </div>   
    <div> 
      <a href="https://github.com/acaciacornigera/" target="blank">
        <BsGithub />
      </a>
    </div>  
    {/* <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
