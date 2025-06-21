import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { assets, dummyCourses, dummyEducatorData } from '../assets/assets.js';
import CourseCard from '../components/CourseCard';

const ListCourse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-16"> {/* Added pt-16 to offset fixed header */}
      <Header logoComponent={<img src={assets.logo} alt="Edemy Logo" className="h-8" />} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-2">Danh sách khóa học</h1>
        <p className="text-gray-600 mb-8"><Link to="/" className="hover:underline">Trang chủ</Link> / Danh sách khóa học</p>

        <div className="flex items-center justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học"
              className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img src={assets.search_icon} alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <button className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Tìm kiếm
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyCourses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.courseThumbnail}
              title={course.courseTitle}
              author={dummyEducatorData.name}
              rating={course.courseRatings.length > 0 ? course.courseRatings.reduce((acc, curr) => acc + curr.rating, 0) / course.courseRatings.length : 0}
              reviews={course.enrolledStudents.length}
              price={`$${course.coursePrice.toFixed(2)}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            Tải thêm
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListCourse;
