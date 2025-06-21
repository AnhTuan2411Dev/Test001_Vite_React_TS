import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

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

export default CourseCard;
