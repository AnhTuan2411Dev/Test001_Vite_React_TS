import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component
import Header from '../components/Header'; // Import the Header component
import { assets, dummyEducatorData, dummyCourses } from '../assets/assets';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-16"> {/* Added pt-16 to offset fixed header */}
      <Header logoComponent={<img src={assets.logo} alt="Edemy Logo" className="h-8" />} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Trao quyền cho tương lai của bạn với các khóa học được thiết kế để <span className="text-blue-600 relative">phù hợp với lựa chọn của bạn.
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300 transform -skew-x-12"></span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi tập hợp các giảng viên đẳng cấp thế giới, nội dung tương tác và một cộng đồng hỗ trợ để giúp bạn đạt được các mục tiêu cá nhân và nghề nghiệp của mình.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="relative flex items-center w-full max-w-md">
              <svg className="absolute left-3 text-gray-400" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Tìm kiếm khóa học"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Tìm kiếm</button>
          </div>
        </div>
      </section>

      {/* Trusted by Learners Section */}
      <section className="py-16 bg-white text-center">
        <p className="text-gray-600 mb-8">Được tin cậy bởi học viên từ</p>
        <div className="flex justify-center items-center space-x-12">
          {/* Company Logos Placeholders */}
          <img src={assets.microsoft_logo} alt="Microsoft" className="h-10" />
          <img src={assets.walmart_logo} alt="Walmart" className="h-10" />
          <img src={assets.accenture_logo} alt="Accenture" className="h-10" />
          <img src={assets.adobe_logo} alt="Adobe" className="h-10" />
          <img src={assets.paypal_logo} alt="PayPal" className="h-10" />
        </div>
      </section>

      {/* Learn from the Best (Courses) Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Học hỏi từ những người giỏi nhất</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Khám phá các khóa học được đánh giá cao nhất của chúng tôi trên nhiều danh mục khác nhau. Từ lập trình và thiết kế đến kinh doanh và sức khỏe, các khóa học của chúng tôi được tạo ra để mang lại kết quả.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dummyCourses.slice(0, 4).map((course, index) => (
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
          <div className="text-center mt-12">
            <Link to="/courses" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100">Hiển thị tất cả khóa học</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Lời chứng thực</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nghe từ các học viên của chúng tôi khi họ chia sẻ hành trình chuyển đổi, thành công và cách nền tảng của chúng tôi đã tạo ra sự khác biệt trong cuộc sống của họ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
              <img src={assets.profile_img_1} alt="Donald Jackman" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900">Donald Jackman</h4>
              <p className="text-gray-600 text-sm mb-3">Kỹ sư phần mềm 1 @ Amazon</p>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500 flex">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Tôi đã sử dụng imagify gần hai năm, chủ yếu cho Instagram, và nó cực kỳ thân thiện với người dùng, giúp công việc của tôi dễ dàng hơn rất nhiều.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Đọc thêm</a>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
              <img src={assets.profile_img_2} alt="Richard Nelson" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900">Richard Nelson</h4>
              <p className="text-gray-600 text-sm mb-3">Kỹ sư phần mềm 2 @ Samsung</p>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500 flex">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Tôi đã sử dụng imagify gần hai năm, chủ yếu cho Instagram, và nó cực kỳ thân thiện với người dùng, giúp công việc của tôi dễ dàng hơn rất nhiều.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Đọc thêm</a>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 text-center">
              <img src={assets.profile_img_3} alt="James Washington" className="w-20 h-20 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900">James Washington</h4>
              <p className="text-gray-600 text-sm mb-3">Kỹ sư phần mềm 2 @ Google</p>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500 flex">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Tôi đã sử dụng imagify gần hai năm, chủ yếu cho Instagram, và nó cực kỳ thân thiện với người dùng, giúp công việc của tôi dễ dàng hơn rất nhiều.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Đọc thêm</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Học mọi thứ, mọi lúc, mọi nơi</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Incididunt sint fugiat pariatur consectetur cupidatat consequat aliquip proident excepteur commodo do ea.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Bắt đầu</button>
            <a href="#" className="text-blue-600 flex items-center hover:underline">
              Tìm hiểu thêm
              <svg className="ml-2" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
