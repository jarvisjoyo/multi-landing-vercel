'use client';

import React, { useState, ReactNode } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

interface AccordionItemProps {
  question: ReactNode;
  answer: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='text-black'>
      <button className={`flex items-center gap-2 cursor-pointer ${isOpen ? 'rounded-t-3xl' : 'rounded-full'} w-full p-4 text-left bg-[#FFD700] focus:outline-none`} onClick={toggle}>
        <span>{isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</span>
        <span className='font-bold'>{question}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 rounded-b-md ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        {isOpen && (
          <div className='p-4 bg-[#fffade]'>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className='space-y-4'>{children}</div>;
};

export { Accordion, AccordionItem };
