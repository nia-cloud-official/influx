import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/3.jpg";
import testimonial3 from "../assets/images/2.jpg";

const testimonialsData = [
  {
    customerName: "Peter Teins",
    customerTitle: "Dementia Teacher and Lecturer",
    content:
      "Influx has been a game-changer for me in my professional life. As a marketer, I often need to research potential clients and partners, and Influx's comprehensive profiles and identity verification feature have been invaluable.",
    image: testimonial1,
  },
  {
    customerName: "Patreck Chatondola",
    customerTitle: "Founder of OneKey",
    content:
      "I can't recommend Influx enough! As an entrepreneur, I'm always meeting new people and looking for trustworthy collaborators. Influx's advanced search algorithms and real-time updates have saved me countless hours of research time.",
    image: testimonial2,
  },
  {
    customerName: "Ms Blessing",
    customerTitle: "Administrator for COH&S Short Courses",
    content:
      "Influx has been a lifesaver for me as a stay-at-home parent. Whether I'm reconnecting with old friends or vetting new babysitters, Influx has made it easy to find the information I need quickly and accurately.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          People like you love Influx
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
