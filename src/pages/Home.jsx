import React from "react";
import icon1 from "../assets/icons/hero-icon.png";
import icon2 from "../assets/icons/hero-icon2.png";
import sponsor1 from "../assets/icons/sponsor1.png";
import sponsor2 from "../assets/icons/sponsor2.png";
import sponsor3 from "../assets/icons/sponsor3.png";
import sponsor4 from "../assets/icons/sponsor4.png";
import sponsor5 from "../assets/icons/sponsor5.png";
import sponsor6 from "../assets/icons/sponsor6.png";
import videoImg from "../assets/videoImg.png";
import course1 from "../assets/course1.png";
// import course2 from '../assets/course2.png'
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";
import course6 from "../assets/course6.png";
import testImg from "../assets/testimg.png";
import check from "../assets/icons/check.png";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="home-container p-20">
      <div className="hero flex flex-col items-center justify-center">
        <div className="inner">
          <div className="relative">
            <div className="absolute bottom-28 -left-7">
              <img src={icon2} alt="" />
            </div>
            <div className="bg-white px-4 py-3 flex items-center">
              <img src={icon1} alt="" className="w-12" />
              <h1 className="font-bold text-4xl ">
                <span className="text-orange">Unlock</span>
                Your Creative Potental
              </h1>
            </div>
            <h3 className="font-semibold text-2xl text-center mt-3">
              with online Design and Development Courses.
            </h3>
            <p className="text-center">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
          <div className="hero-btn flex items-center gap-2 mt-3 justify-center">
            <button className="px-4 py-2 text-white bg-orange rounded-md">
              Exlpore Courses
            </button>
            <button className="bg-white px-3 py-2 rounded-md">
              View Pricing
            </button>
          </div>
        </div>
        <div className="sponsors px-1 py-3 mt-16 flex items-center  justify-center gap-12 bg-white rounded-md w-full ">
          <img src={sponsor1} alt="" className="w-24" />
          <img src={sponsor2} alt="" className="w-24" />
          <img src={sponsor3} alt="" className="w-24" />
          <img src={sponsor4} alt="" className="w-24 " />
          <img src={sponsor5} alt="" className="w-24" />
          <img src={sponsor6} alt="" className="w-24" />
        </div>
        <div className="mt-6">
          <img src={videoImg} alt="" />
        </div>
        <div className="benefits mt-20">
          <div className="-ml-8 mb-10 top-txt ">
            <h3 className="font-bold text-2xl">Benefits</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, accusantium? Necessitatibus, accusantium?
            </p>
          </div>
          <div className="container gap-3 w-full">
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">01</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">Flexible Learning Schedule</h3>
                <p className="text-sm">
                  Fit your coursework around your existing commitments and
                  obligations.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">02</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">Expert Instruction</h3>
                <p className="text-sm">
                  Learn from industry experts who have hands-on experience in
                  design and development.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">03</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">Diverse Course Offerings</h3>
                <p className="text-sm">
                  Explore a wide range of design and development courses
                  covering various topics.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">04</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">Updated Curriculum</h3>
                <p className="text-sm">
                  Access courses with up-to-date content reflecting the latest
                  trends and industry practices.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">05</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">
                  Practical Projects and Assignments
                </h3>
                <p className="text-sm">
                  Develop a portfolio showcasing your skills and abilities to
                  potential employers.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg w-80 box ">
              <h2 className="font-bold text-4xl float-right">06</h2>
              <div className="mt-14">
                <h3 className="font-semibold ">
                  Interactive Learning Environment
                </h3>
                <p className="text-sm">
                  Collaborate with fellow learners, exchanging ideas and
                  feedback to enhance your understanding.
                </p>
              </div>
              <button className="bg-btn-grey p-4 border border-input rounded-md mt-5 float-right text-orange">
                <GoArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div className="our-course">
          <div className="-ml-2 mb-10 top-txt ">
            <h3 className="font-bold text-2xl">Our Courses</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, accusantium? Necessitatibus, accusantium?
            </p>
          </div>
          <div className="course-grid grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-5">
            <div className="bg-white px-5 py-6 rounded-lg box h-auto  ">
              <img src={course1} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    6 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By Emily Johnson</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">UI/UX Design</h3>
                <p className="text-sm">
                  Master the art of creating intuitive user interfaces (UI) and
                  enhancing user experiences (UX). Learn design principles,
                  wireframing, prototyping, and usability testing techniques.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
            <div className="bg-white px-5 py-6 rounded-lg box h-auto  ">
              <img src={course3} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    8 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By David Brown</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">Mobile App Development</h3>
                <p className="text-sm">
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
            <div className="bg-white lg:px-5 md:px-5 sm:px-2 py-6 rounded-lg box h-auto  ">
              <img src={course4} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    10 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By Sarah Thompson</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">
                  Graphic Design for Beginners
                </h3>
                <p className="text-sm">
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
            <div className="bg-white lg:px-5 md:px-5 sm:px-2 py-6 rounded-lg box h-auto  ">
              <img src={course5} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    10 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By Michael Adams</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">
                  Front-End Web Developmentt
                </h3>
                <p className="text-sm">
                  Become proficient in front-end web development. Learn HTML,
                  CSS, JavaScript, and popular frameworks like Bootstrap and
                  React. Build interactive and responsive websites.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
            <div className="bg-white lg:px-5 md:px-5 sm:px-2 py-6 rounded-lg box h-auto  ">
              <img src={course6} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    8 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By David Brown</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">Mobile App Development</h3>
                <p className="text-sm">
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
            <div className="bg-white lg:px-5 md:px-5 sm:px-2 py-6 rounded-lg box h-auto  ">
              <img src={course1} alt="" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    8 Weeks
                  </span>
                  <span className="border border-input px-2 py-1 text-sm rounded-md">
                    intermidiate
                  </span>
                </div>
                <h3 className="font-semibold  text-sm">By David Brown</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-bold text-lg">Mobile App Development</h3>
                <p className="text-sm">
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </p>
              </div>
              <button className="w-full bg-slate-200 px-3 py-2 h-10 rounded-md mt-3 text-sm">
                Get it Now
              </button>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="-ml-2 mb-10 top-txt ">
            <h3 className="font-bold text-2xl">Our Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, accusantium? Necessitatibus, accusantium?
            </p>
          </div>
          <div className="grid-container grid lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <div className="bg-white p-7 rounded-md box ">
              <div>
                <p className="text-sm">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img src={testImg} alt="" />
                <h3 className="font-bold">Sarah L</h3>
              </div>
            </div>
            <div className="bg-white p-7 rounded-md box ">
              <div>
                <p className="text-sm">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img src={testImg} alt="" />
                <h3 className="font-bold">Sarah L</h3>
              </div>
            </div>

            <div className="bg-white p-7 rounded-md box ">
              <div>
                <p className="text-sm">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img src={testImg} alt="" />
                <h3 className="font-bold">Sarah L</h3>
              </div>
            </div>
            <div className="bg-white p-7 rounded-md box ">
              <div>
                <p className="text-sm">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </p>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <img src={testImg} alt="" />
                <h3 className="font-bold">Sarah L</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing">
          <div className="-ml-2 mb-10 top-txt ">
            <h3 className="font-bold text-2xl">Our Pricing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, accusantium? Necessitatibus, accusantium?
            </p>
          </div>
          <div className="bg-white lg:p-6 md:p-6 sm:p-2 rounded-md flex gap-5 container ">
            <div className="bg-slate-100 p-5 rounded-md">
              <div className="font-semibold px-3 py-1 border border-input rounded-md text-center bg-light-ora w-96">
                Free plan
              </div>
              <div className="text-center mt-6 ">
                <h1 className="font-bold text-6xl">
                  $0<span className="text-sm font-normal">/month</span>
                </h1>
              </div>
              <div className="bg-white p-6 rounded-md mt-3 features">
                <h3 className="text-center font-semibold ">
                  Availabe features
                </h3>
                <ul>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Access to selected free courses</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Limited course materials and resources.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Basic community support.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>No certification upon completion.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Ad-supported platform.</h3>
                  </div>
                </ul>
              </div>
              <button className="text-center text-white px-3 py-3 bg-orange w-full rounded-bl-lg rounded-br-lg">
                Get started
              </button>
            </div>
            <div className="bg-slate-100 p-5 rounded-md">
              <div className="font-semibold px-3 py-1 border border-input rounded-md text-center bg-light-ora w-96">
                Pro plan
              </div>
              <div className="text-center mt-6 ">
                <h1 className="font-bold text-6xl">
                  $79<span className="text-sm font-normal">/month</span>
                </h1>
              </div>
              <div className="bg-white p-6 rounded-md mt-3 features">
                <h3 className="text-center font-semibold ">
                  Availabe features
                </h3>
                <ul>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Unlimited access to all courses.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Unlimited course materials and resources.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Priority support from instructors.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Course completion certificates.</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 w-full border border-input mt-3 rounded-md">
                    <img src={check} alt="" />
                    <h3>Ad-free experience..</h3>
                  </div>
                </ul>
              </div>
              <button className="text-center text-white px-3 py-3 bg-orange w-full rounded-bl-lg rounded-br-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
