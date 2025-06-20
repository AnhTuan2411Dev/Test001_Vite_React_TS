import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import courseImage from '../assets/course_1.png';
import ratingStar from '../assets/rating_star.svg';
import timeClockIcon from '../assets/time_clock_icon.svg';
import lessonIcon from '../assets/lesson_icon.svg';
import timeLeftClockIcon from '../assets/time_left_clock_icon.svg';
import downArrowIcon from '../assets/down_arrow_icon.svg';
import playIcon from '../assets/play_icon.svg';
import blueTickIcon from '../assets/blue_tick_icon.svg';
import Footer from '../components/Footer'; // Import the Footer component
import Header from '../components/Header'; // Import the Header component

const DetailPage: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const courseStructure = [
    {
      title: "Giới thiệu dự án",
      lectures: 3,
      duration: "45 phút",
      items: [
        { name: "Tổng quan ứng dụng - Xây dựng SaaS chuyển văn bản thành hình ảnh", time: "10 phút" },
        { name: "Ngăn xếp công nghệ - React, Node.js, MongoDB.", time: "15 phút" },
        { name: "Các tính năng cốt lõi - Xác thực, thanh toán, triển khai", time: "20 phút" },
      ],
    },
    {
      title: "Thiết lập và cấu hình dự án",
      lectures: 4,
      duration: "45 phút",
      items: [
        { name: "Thiết lập môi trường - Cài đặt Node.JS, VS Code", time: "10 phút" },
        { name: "Thiết lập kho lưu trữ - Sao chép kho lưu trữ dự án", time: "10 phút" },
        { name: "Cài đặt phụ thuộc - Thiết lập các gói npm", time: "10 phút" },
        { name: "Cấu hình ban đầu - Thiết lập các tệp và thư mục cơ bản", time: "15 phút" },
      ],
    },
    {
      title: "Thiết lập Tailwind",
      lectures: 4,
      duration: "45 phút",
      items: [],
    },
    {
      title: "Dự án Frontend",
      lectures: 4,
      duration: "45 phút",
      items: [],
    },
    {
      title: "Dự án Backend",
      lectures: 4,
      duration: "45 phút",
      items: [],
    },
    {
      title: "Tích hợp thanh toán",
      lectures: 4,
      duration: "45 phút",
      items: [],
    },
    {
      title: "Triển khai dự án",
      lectures: 4,
      duration: "45 phút",
      items: [],
    },
  ];

  return (
    <div className="font-sans text-gray-800 pt-16" > {/* Added pt-16 to offset fixed header */}
      <Header logoComponent={<img src={logo} alt="Edemy Logo" className="h-8" />} />

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12" >
        {/* Left Section - Course Details */}
        <div className="lg:w-2/3" >
          <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline flex items-center mb-4 bg-transparent border-none cursor-pointer p-0">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Quay lại
          </button>
          <h1 className="text-5xl font-bold mb-4 leading-tight" >
            Xây dựng ứng dụng SaaS chuyển văn bản thành hình ảnh bằng React JS
          </h1>
          <p className="text-lg text-gray-600 mb-6" >
            Thành thạo MERN Stack bằng cách xây dựng ứng dụng SaaS AI Text to Image Full Stack sử dụng
            React js, Mongodb, Node.js, Express js và Stripe Payment
          </p>
          <div className="flex items-center mb-6" >
            <div className="flex items-center mr-4" >
              <img src={ratingStar} alt="Star" className="h-4 w-4 mr-1" />
              <span className="text-gray-700 font-semibold" >4.5</span>
              <span className="text-gray-500 ml-2" >(122 đánh giá)</span>
            </div>
            <span className="text-gray-500" >21 học viên</span>
          </div>
          <p className="text-gray-600 mb-12" >
            Khóa học bởi <a href="#" className="text-blue-600 hover:underline" >Richard James</a>
          </p>

          {/* Course Structure */}
          <section className="mb-12" >
            <h2 className="text-3xl font-bold mb-6" >Cấu trúc khóa học</h2>
            <p className="text-gray-600 mb-6" >
              22 phần - 54 bài giảng - tổng thời lượng 27h 25m
            </p>
            <div className="border border-gray-200 rounded-lg" >
              {courseStructure.map((section, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0" >
                  <button
                    className="flex justify-between items-center w-full p-4 text-lg font-semibold text-left hover:bg-gray-50"
                    onClick={() => toggleSection(section.title)}
                  >
                    <div className="flex items-center" >
                      <img
                        src={downArrowIcon}
                        alt="Toggle"
                        className={`h-4 w-4 mr-3 transition-transform ${
                          openSections.includes(section.title) ? "rotate-180" : ""
                        }`}
                      />
                      {section.title}
                    </div>
                    <span className="text-gray-500 text-base" >
                      {section.lectures} bài giảng - {section.duration}
                    </span>
                  </button>
                  {openSections.includes(section.title) && (
                    <div className="px-4 pb-4" >
                      {section.items.length > 0 ? (
                        <ul className="space-y-2" >
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-gray-700" >
                              <img src={playIcon} alt="Play" className="h-4 w-4 mr-3" />
                              {item.name}
                              <span className="ml-auto text-gray-500" >{item.time}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm ml-7" >Không có bài giảng chi tiết nào cho phần này.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Course Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6" >Mô tả khóa học</h2>
            <p className="text-gray-700 leading-relaxed mb-4" >
              Đây là khóa học JavaScript toàn diện và chuyên sâu nhất với 30 dự án JavaScript.
            </p>
            <p className="text-gray-700 leading-relaxed" >
              JavaScript hiện là ngôn ngữ lập trình phổ biến nhất trên thế giới. Nếu bạn là một nhà phát triển web hoặc nhà phát triển full stack đầy tham vọng, JavaScript là một ngôn ngữ bắt buộc phải học. Nó cũng giúp bạn có được những công việc lương cao trên toàn thế giới.
            </p>
          </section>
        </div>

        {/* Right Section - Course Card */}
        <div className="lg:w-1/3 flex justify-center" >
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full" >
            <img src={courseImage} alt="Course Thumbnail" className="w-full h-auto object-cover" />
            <div className="p-6" >
              <div className="flex items-center text-red-500 mb-4" >
                <img src={timeLeftClockIcon} alt="Time Left" className="h-5 w-5 mr-2" />
                <span className="font-semibold" >Còn 5 ngày</span> với giá này!
              </div>
              <div className="flex items-baseline mb-4" >
                <span className="text-4xl font-bold text-gray-900 mr-2" >$10.99</span>
                <span className="text-xl text-gray-500 line-through mr-2" >$19.99</span>
                <span className="text-xl text-red-500 font-semibold" >Giảm 50%</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 mb-6" >
                <div className="flex items-center" >
                  <img src={ratingStar} alt="Rating" className="h-4 w-4 mr-1" />
                  <span>4.5</span>
                </div>
                <div className="flex items-center" >
                  <img src={timeClockIcon} alt="Hours" className="h-4 w-4 mr-1" />
                  <span>30 giờ</span>
                </div>
                <div className="flex items-center" >
                  <img src={lessonIcon} alt="Lessons" className="h-4 w-4 mr-1" />
                  <span>54 bài học</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors" >
                Đăng ký ngay
              </button>
              <div className="mt-6" >
                <h3 className="text-xl font-bold mb-3" >Có gì trong khóa học?</h3>
                <ul className="space-y-2 text-gray-700" >
                  <li className="flex items-center" >
                    <img src={blueTickIcon} alt="Tick" className="h-4 w-4 mr-2" />
                    Truy cập trọn đời với các bản cập nhật miễn phí.
                  </li>
                  <li className="flex items-center" >
                    <img src={blueTickIcon} alt="Tick" className="h-4 w-4 mr-2" />
                    Hướng dẫn dự án từng bước, thực hành.
                  </li>
                  <li className="flex items-center" >
                    <img src={blueTickIcon} alt="Tick" className="h-4 w-4 mr-2" />
                    Tài nguyên có thể tải xuống và mã nguồn.
                  </li>
                  <li className="flex items-center" >
                    <img src={blueTickIcon} alt="Tick" className="h-4 w-4 mr-2" />
                    Chứng chỉ hoàn thành.
                  </li>
                  <li className="flex items-center" >
                    <img src={blueTickIcon} alt="Tick" className="h-4 w-4 mr-2" />
                    Các câu đố để kiểm tra kiến thức của bạn.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailPage;
