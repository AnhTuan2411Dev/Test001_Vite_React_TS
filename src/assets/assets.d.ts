declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

export declare const assets: {
  logo: string;
  search_icon: string;
  sketch: string;
  microsoft_logo: string;
  walmart_logo: string;
  accenture_logo: string;
  adobe_logo: string;
  paypal_logo: string;
  course_1_thumbnail: string;
  course_2_thumbnail: string;
  course_3_thumbnail: string;
  course_4_thumbnail: string;
  star: string;
  star_blank: string;
  profile_img_1: string;
  profile_img_2: string;
  profile_img_3: string;
  arrow_icon: string;
  down_arrow_icon: string;
  time_left_clock_icon: string;
  time_clock_icon: string;
  user_icon: string;
  home_icon: string;
  add_icon: string;
  my_course_icon: string;
  person_tick_icon: string;
  facebook_icon: string;
  instagram_icon: string;
  twitter_icon: string;
  cross_icon: string;
  upload_area: string;
  logo_dark: string;
  file_upload_icon: string;
  appointments_icon: string;
  earning_icon: string;
  dropdown_icon: string;
  patients_icon: string;
  course_4: string;
  profile_img: string;
  profile_img2: string;
  profile_img3: string;
  play_icon: string;
  blue_tick_icon: string;
  lesson_icon: string;
};

export declare const dummyEducatorData: {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export declare const dummyTestimonial: {
  name: string;
  role: string;
  image: string;
  rating: number;
  feedback: string;
}[];

export declare const dummyDashboardData: {
  totalEarnings: number;
  enrolledStudentsData: {
    courseTitle: string;
    student: {
      _id: string;
      name: string;
      imageUrl: string;
    };
  }[];
  totalCourses: number;
};

export declare const dummyStudentEnrolled: {
  student: {
    _id: string;
    name: string;
    imageUrl: string;
  };
  courseTitle: string;
  purchaseDate: string;
}[];

export declare const dummyCourses: {
  _id: string;
  courseTitle: string;
  courseDescription: string;
  coursePrice: number;
  isPublished: boolean;
  discount: number;
  courseContent: {
    chapterId: string;
    chapterOrder: number;
    chapterTitle: string;
    chapterContent: {
      lectureId: string;
      lectureTitle: string;
      lectureDuration: number;
      lectureUrl: string;
      isPreviewFree: boolean;
      lectureOrder: number;
    }[];
  }[];
  educator: string;
  enrolledStudents: string[];
  courseRatings: {
    userId: string;
    rating: number;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  courseThumbnail: string;
}[];
