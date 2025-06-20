import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.tsx';
import { assets } from '../assets/assets.js'; // Assuming assets.js exports an assets object

interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  reviews: number;
  price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, author, rating, reviews, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <Link to="/detail"><h3 className="font-semibold text-lg mb-2">{title}</h3></Link>
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 font-bold mr-1">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(rating) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">({reviews})</span>
        </div>
        <p className="text-gray-800 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
};

const ListCourse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      image: assets.course_1_thumbnail,
      title: "Xây dựng ứng dụng SaaS chuyển văn bản thành hình ảnh bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_2_thumbnail,
      title: "Xây dựng ứng dụng SaaS xóa nền AI bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_3_thumbnail,
      title: "Khóa học React Router hoàn chỉnh trong một video",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_4_thumbnail,
      title: "Xây dựng ứng dụng E-Commerce Full Stack bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_1_thumbnail,
      title: "Xây dựng ứng dụng SaaS chuyển văn bản thành hình ảnh bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_2_thumbnail,
      title: "Xây dựng ứng dụng SaaS xóa nền AI bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_3_thumbnail,
      title: "Khóa học React Router hoàn chỉnh trong một video",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
    {
      image: assets.course_4_thumbnail,
      title: "Xây dựng ứng dụng E-Commerce Full Stack bằng React JS",
      author: "Richard James",
      rating: 4.5,
      reviews: 122,
      price: "$10.99",
    },
  ];

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
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
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
