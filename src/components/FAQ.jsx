import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    const faqs = [
        {
            question: "What is Run Club?",
            answer: "Run Club is a community-driven marathon event that encourages fitness and camaraderie among runners of all levels.",
        },
        {
            question: "How can I register for the marathon?",
            answer: "You can register through our official website by filling out the registration form and completing the payment process.",
        },
        {
            question: "What is the marathon route?",
            answer: "The route details will be shared on our website and social media pages prior to the event.",
        },
        {
            question: "Are there any participation fees?",
            answer: "Yes, there is a small fee that covers event organization, refreshments, and a participation kit.",
        },
        {
            question: "Will I get a medal or certificate?",
            answer: "Yes! All participants will receive a certificate, and top finishers will be awarded medals.",
        },
        {
            question: "What should I bring on race day?",
            answer: "Participants should bring their registration confirmation, a valid ID, proper running gear, and hydration supplies.",
        },
        {
            question: "Is there an age limit for participation?",
            answer: "Participants must be at least 16 years old. Minors must have parental consent.",
        },
        {
            question: "Will there be water stations along the route?",
            answer: "Yes, water stations will be placed at regular intervals along the marathon route.",
        },
        {
            question: "Can I volunteer for the event?",
            answer: "Yes, we welcome volunteers! You can sign up on our website to help with organization and support.",
        },
        {
            question: "What happens if it rains on race day?",
            answer: "The marathon will proceed unless weather conditions are deemed unsafe. Any changes will be communicated via our website and social media.",
        }
    ];
    
        const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
   
    return (
        <div className="max-w-3xl mx-auto p-6" id='faq'>
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-200">
                        <input
                            type="checkbox"
                            className="peer"
                            checked={openIndex === index}
                            onChange={() => toggleFAQ(index)}
                        />
                        <div className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer">
                            {faq.question}
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <div className="collapse-content">
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FAQ;