import React from 'react';
import ServicesSlider from './ServicesSlider';

 const services2 = [
  {
    title: 'Company Registration',
    description: 'Discover a start-to-finish method of starting your own company like MSME, Startup India, etc.',
    bgImage: '/firstcard.webp',
    link: '/services/web-development', // <-- link for this card
  },
  {
    title: 'Trademark Registration',
    description: 'Get your company’s trademark registered at a minimal cost to win the trust of your customers.',
    bgImage: 'secondcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'ROC',
    description: 'Transform with ROC consulting solutions, like share valuation, search report, structuring, etc.',
    bgImage: 'thirdcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'Business Registration',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: '/firstcard.webp',
    link: '/services/web-development', // <-- link for this card
  },
  {
    title: 'Tax & Compliance',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'secondcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'Lawyer Services',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'thirdcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'Documentation',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: '/firstcard.webp',
    link: '/services/web-development', // <-- link for this card
  },
  {
    title: 'Other',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'secondcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'Lawyer Services',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'thirdcard.webp',
    link: '/services/graphic-design',
  },
    {
    title: 'Income Tax Filing & Tax Planning',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'firstcard.webp',
    link: '/services/graphic-design',
  },
  {
    title: 'GST Registration & Filing',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'secondcard.webp',
    link: '/services/graphic-design',
  },
    {
    title: 'Complete Accounting & Bookkeeping',
    description: 'We provide personalized tax and accounting solutions for individuals and businesses across India.',
    bgImage: 'thirdcard.webp',
    link: '/services/graphic-design',
  },
];

const ServicesSection = () => {
  return (
    <div>
      <ServicesSlider services={services2} />
    </div>
  );
};

export default ServicesSection;
