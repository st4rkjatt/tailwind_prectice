import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-white'>REACT.</h1>
        <p className='py-4 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6 text-sky-500'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-white'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Analytics</li>
            <li className='py-2 text-sm text-white'>Marketing</li>
            <li className='py-2 text-sm text-white'>Commerce</li>
            <li className='py-2 text-sm text-white'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-white'>Support</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Pricing</li>
            <li className='py-2 text-sm text-white'>Documentation</li>
            <li className='py-2 text-sm text-white'>Guides</li>
            <li className='py-2 text-sm text-white'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-white'>Company</h6>
        <ul>
            <li className='py-2 text-sm text-white'>About</li>
            <li className='py-2 text-sm text-white'>Blog</li>
            <li className='py-2 text-sm text-white'>Jobs</li>
            <li className='py-2 text-sm text-white'>Press</li>
            <li className='py-2 text-sm text-white'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-white'>Legal</h6>
        <ul>
            <li className='py-2 text-sm text-white'>Claim</li>
            <li className='py-2 text-sm text-white'>Policy</li>
            <li className='py-2 text-sm text-white'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;