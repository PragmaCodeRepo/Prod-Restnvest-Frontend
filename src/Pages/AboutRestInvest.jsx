import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.jpg";
import aboutbg from "../assets/books_bg.png"; 
import innovationImage from "../assets/person2.jpg"; 

const AboutRestInvest = () => {
  return (
    <section className="text-gray-800">
      {/* Header Section */}
      <div className="relative text-white">
        <div
          className="bg-cover bg-center bg-no-repeat h-64 md:h-80 lg:h-96"
          style={{ backgroundImage: `url(${aboutbg})` }}
        >
          <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
            <Zoom triggerOnce duration={600}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center">
                About RestInvest
              </h1>
            </Zoom>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white px-4 sm:px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Our Vision Section */}
          <div className="mb-12">
            <Fade triggerOnce cascade duration={600}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl text-[#3892BB] mb-4">
                To create the Berkshire Hathaway of the digital age.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                A digital market distilling the accumulated wisdom of greats like Benjamin Graham, Warren Buffett, Joel Greenblatt, and Michael Burry, while democratizing investing to realize the vision of Peter Lynch. We combine timeless strategies with modern technology, making intelligent investing accessible for everyone.
              </p>
            </Fade>

            {/* Image and Quote */}
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 mt-8">
              <Slide direction="left" triggerOnce duration={800}>
                <img
                  src={person1}
                  alt="Person"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg object-cover shadow-lg"
                />
              </Slide>
              <Fade triggerOnce delay={400}>
                <div className="mt-4 md:mt-0">
                  <p className="text-base md:text-lg italic">
                    "The world is full of foolish gamblers, and they will not do as well as the patient investors."
                  </p>
                  <p className="text-right font-semibold mt-2">-- Charlie Munger</p>
                </div>
              </Fade>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="mb-12">
            <Slide direction="up" triggerOnce duration={600}>
              <h2 className="text-3xl md:text-4xl  mb-4">The Challenge</h2>
              <p className="text-xl md:text-2xl text-[#3892BB] mb-4">To know thyself</p>
            </Slide>
            <Fade triggerOnce cascade duration={400}>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                In the digital age, stocks, information, and even strategies are accessible with the click of a button. Yet, human instincts often remain the greatest challenge. Patience is key, but difficult to master – until now.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                The bright colors, blinking price signals, and push notifications can turn the modern brokerage industry into a disguised casino. Our platform helps you break free from impulsive trading and stay grounded in rational decision-making.
              </p>
            </Fade>
          </div>

          {/* The Innovation Section */}
          <div className="mb-12">
            <Zoom triggerOnce duration={800}>
              <h2 className="text-3xl md:text-4xl mb-4">The Innovation</h2>
              <p className="text-xl md:text-2xl text-[#3892BB] mb-4">Helping mere mortals invest like the greats</p>
            </Zoom>
            <Fade triggerOnce cascade duration={400}>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                Business reality, distilled. Delivered through a platform focused relentlessly on fundamentals, cutting out the noise, and helping you make decisions rooted in fact, not emotion.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                No complex financial products, no speculative trades, no distractions. Just the essential facts, presented with clarity, professionalism, and calm.
              </p>
            </Fade>

            {/* Image and Quote */}
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 mt-8">
              <Slide direction="right" triggerOnce duration={800}>
                <img
                  src={innovationImage}
                  alt="Innovation Section Image"
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg object-cover shadow-lg"
                />
              </Slide>
              <Fade triggerOnce delay={400}>
                <div className="mt-4 md:mt-0">
                  <p className="text-base md:text-lg italic">
                    "I think time horizons are shortening. If you keep measuring things in shorter periods [...] it makes you more susceptible to emotional influence."
                  </p>
                  <p className="text-right font-semibold mt-2">-- Joel Greenblatt</p>
                </div>
              </Fade>
            </div>
          </div>

          {/* Business Model Section */}
          <div className="mb-12">
            <Slide direction="up" triggerOnce duration={600}>
              <h2 className="text-3xl md:text-4xl mb-6">Our Business Model</h2>
            </Slide>
            <Fade triggerOnce cascade duration={400}>
              <h3 className="text-xl md:text-2xl text-[#3892BB] mb-4">
                Skin in the game: We win only when you win
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                Traditional money management often charges you regardless of performance. We take a different approach. Our fees are tied solely to your success, charging only 1% of your gains over a three-year period.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                If after 3 years, you haven’t gained, we charge nothing. Our model is aligned with your long-term growth.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRestInvest;
