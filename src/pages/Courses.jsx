import React from "react";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";
const Courses = () => {
  return (
    <div className="course-container">
      <div className="flex flex-col md:flex-row gap-7 justify-center mb-5">
        <h1 className="font-bold text-2xl w-full md:w-96 text-center md:text-left">
          Online Courses on Design and Development
        </h1>
        <p className="text-xs w-full md:w-[600px] p-3 text-center md:text-left">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div className="courses mt-24 mb-4 px-4 sm:px-8 md:px-16 lg:px-44">
        <div className="bg-white p-6 rounded-md shadow-md w-full">
          {/* Course Description */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Web Design Fundamentals
            </h3>
            <p className="text-sm text-gray-600">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 flex-wrap w-full">
      <img
        src={course3}
        alt="Course 3"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course4}
        alt="Course 4"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course5}
        alt="Course 5"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
    </div>
          <div className="mt-5 flex gap-3 flex-col md:flex-row   justify-between">
            <div className="flex items-center gap-2">
              <span className="border px-3 py-2 rounded-md">4 Weeks</span>
              <span className="border px-3 py-2 rounded-md">Beginner</span>
            </div>
            <h3 className="font-bold">By John Smith</h3>
          </div>
          <div className="border border-input mt-4 ">
            <div className="w-full border-b p-5 ">
              <h3 className="font-bold text-lg ">Curriculum</h3>
            </div>
            <div className="p-4 flex flex-col md:flex-row  gap-6">
              <div>
                <h1 className="font-bold text-4xl ">01</h1>
                <h3 className="text-sm  mt-3">Introduction to HTML</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">02</h1>
                <h3 className="text-sm  mt-3">Styling with CSS</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">03</h1>
                <h3 className="text-sm  mt-3">
                  Introduction to Responsive Design
                </h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">04</h1>
                <h3 className="text-sm  mt-3">Design Principles for Web</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">05</h1>
                <h3 className="text-sm  mt-3">Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses mt-10 mb-4 px-4 sm:px-8 md:px-16 lg:px-44">
        <div className="bg-white p-6 rounded-md shadow-md w-full">
          {/* Course Description */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Mobile App Development
            </h3>
            <p className="text-sm text-gray-600">
              Dive into the world of mobile app development. Learn to build
              native iOS and Android applications using industry-leading
              frameworks like Swift and Kotlin.
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 flex-wrap w-full">
      <img
        src={course3}
        alt="Course 3"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course4}
        alt="Course 4"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course5}
        alt="Course 5"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
    </div>
          <div className="mt-5 flex gap-3 flex-col md:flex-row   justify-between">
            <div className="flex items-center gap-2">
              <span className="border px-3 py-2 rounded-md">8 Weeks</span>
              <span className="border px-3 py-2 rounded-md">intermediate</span>
            </div>
            <h3 className="font-bold">By John Smith</h3>
          </div>
          <div className="border border-input mt-4 ">
            <div className="w-full border-b p-5 ">
              <h3 className="font-bold text-lg ">Curriculum</h3>
            </div>
            <div className="p-4 flex flex-col md:flex-row  gap-6">
              <div>
                <h1 className="font-bold text-4xl ">01</h1>
                <h3 className="text-sm mt-3">
                  Introduction to Mobile App Development
                </h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">02</h1>
                <h3 className="text-sm  mt-3">
                  Fundamentals of Swift Programming (iOS)
                </h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">03</h1>
                <h3 className="text-sm  mt-3">
                  Fundamentals of Kotlin Programming (Android)
                </h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">04</h1>
                <h3 className="text-sm mt-3">Building User Interfaces</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">05</h1>
                <h3 className="text-sm  mt-3">App Deployment and Testing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses mt-10 mb-4 px-4 sm:px-8 md:px-16 lg:px-44">
        <div className="bg-white p-6 rounded-md shadow-md w-full">
          {/* Course Description */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              Graphic Design for Beginners
            </h3>
            <p className="text-sm text-gray-600">
              Discover the fundamentals of graphic design, including typography,
              color theory, layout design, and image manipulation techniques.
              Create visually stunning designs for print and digital media.
            </p>
          </div>
          <div className="flex gap-4 md:gap-10 flex-wrap w-full">
      <img
        src={course3}
        alt="Course 3"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course4}
        alt="Course 4"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course5}
        alt="Course 5"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
    </div>
          <div className="mt-5 flex gap-3 flex-col md:flex-row   justify-between">
            <div className="flex items-center gap-2">
              <span className="border px-3 py-2 rounded-md">10 Weeks</span>
              <span className="border px-3 py-2 rounded-md">Beginner</span>
            </div>
            <h3 className="font-bold">By John Smith</h3>
          </div>
          <div className="border border-input mt-4 ">
            <div className="w-full border-b p-5 ">
              <h3 className="font-bold text-lg ">Curriculum</h3>
            </div>
            <div className="p-4 flex flex-col md:flex-row  gap-6">
              <div>
                <h1 className="font-bold text-4xl ">01</h1>
                <h3 className="text-sm mt-3">Introduction to Graphic Design</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">02</h1>
                <h3 className="text-sm  mt-3">Typography and Color Theory</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">03</h1>
                <h3 className="text-sm  mt-3">Layout Design and Composition</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">04</h1>
                <h3 className="text-sm mt-3">Image Editing and Manipulation</h3>
              </div>
              <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

              <div>
                <h1 className="font-bold text-4xl ">05</h1>
                <h3 className="text-sm  mt-3">
                  Designing for Print and Digital Media
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses mt-10 mb-4 px-4 sm:px-8 md:px-16 lg:px-44">
  <div className="bg-white p-6 rounded-md shadow-md w-full">
    {/* Course Description */}
    <div className="mb-6">
      <h3 className="font-bold text-xl text-gray-800 mb-2">
        Front-End Web Development
      </h3>
      <p className="text-sm text-gray-600">
        Become proficient in front-end web development. Learn HTML, CSS,
        JavaScript, and popular frameworks like Bootstrap and React. Build
        interactive and responsive websites.
      </p>
    </div>
    <div className="flex gap-4 md:gap-10 flex-wrap w-full">
      <img
        src={course3}
        alt="Course 3"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course4}
        alt="Course 4"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
      <img
        src={course5}
        alt="Course 5"
        className="w-28 md:w-72 rounded-md shadow-sm object-cover"
      />
    </div>
    <div className="mt-5 flex gap-3 flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2">
        <span className="border px-3 py-2 rounded-md">10 Weeks</span>
        <span className="border px-3 py-2 rounded-md">Intermediate</span>
      </div>
      <h3 className="font-bold">By John Smith</h3>
    </div>

    <div className="border border-input mt-4">
      <div className="w-full border-b p-5">
        <h3 className="font-bold text-lg">Curriculum</h3>
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-6">
        <div>
          <h1 className="font-bold text-4xl">01</h1>
          <h3 className="text-sm mt-3">HTML Fundamentals</h3>
        </div>
        <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

        <div>
          <h1 className="font-bold text-4xl">02</h1>
          <h3 className="text-sm mt-3">CSS Styling and Layouts</h3>
        </div>
        <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

        <div>
          <h1 className="font-bold text-4xl">03</h1>
          <h3 className="text-sm mt-3">JavaScript Basics</h3>
        </div>
        <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

        <div>
          <h1 className="font-bold text-4xl">04</h1>
          <h3 className="text-sm mt-3">Building Responsive Websites</h3>
        </div>
        <div className="w-full h-0.5 bg-gray-100 sm:w-0.5 sm:h-20"></div>

        <div>
          <h1 className="font-bold text-4xl">05</h1>
          <h3 className="text-sm mt-3">
            Introduction to Bootstrap and React
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Courses;
