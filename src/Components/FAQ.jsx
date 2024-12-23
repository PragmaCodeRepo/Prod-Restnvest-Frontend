import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is stock trading?",
      answer:
        "Stock trading involves buying and selling shares of companies in the stock market. It allows investors to earn profits through price appreciation and dividends.",
    },
    {
      question: "How can I start trading stocks?",
      answer:
        "To start trading stocks, you need to open a brokerage account, deposit funds, research stocks, and start investing. It's advisable to understand market trends and consult financial advisors before investing.",
    },
    {
      question: "What does it mean to gift stocks to children?",
      answer:
        "Gifting stocks to children means transferring shares to a custodial account in their name. This helps secure their financial future by allowing the investment to grow over time.",
    },
    {
      question: "How can I gift stocks to my children?",
      answer:
        "You can gift stocks by opening a custodial account (UTMA/UGMA) for your child and transferring shares into that account. It’s a tax-efficient way to provide long-term financial benefits.",
    },
    {
      question: "What is RestInvest’s role in stock gifting?",
      answer:
        "RestInvest simplifies the process of gifting stocks to children by providing an easy-to-use platform for account setup, transfers, and ongoing management of investments. It also educates users on investment strategies.",
    },
    {
      question: "Is it safe to trade stocks?",
      answer:
        "Stock trading involves risks, and it's essential to do thorough research before investing. Diversifying your portfolio and staying informed about market trends can help minimize risks.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-3/4">
      <h1 className="text-4xl font-bold text-[#2C6E91] mb-8 text-center tracking-wide mt-20">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Everything you need to know about trading stocks and gifting investments. Explore our FAQs to find answers to your questions.
      </p>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              className={`flex justify-between items-center w-full p-4 text-lg font-semibold ${
                openIndex === index
                  ? "bg-[#2C6E91] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-xl" />
              ) : (
                <FaPlus className="text-xl" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-6 bg-gray-50 text-gray-700 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
