import React from 'react';

interface SignInProps {
  isLoginActive: boolean;
  showPasswordLogin: boolean;
  setShowPasswordLogin: (show: boolean) => void;
  handleFormSubmit: (e: React.FormEvent, formType: 'login' | 'register') => void;
}

const SignIn: React.FC<SignInProps> = ({ isLoginActive, showPasswordLogin, setShowPasswordLogin, handleFormSubmit }) => {
  return (
    <div id="loginForm" className={isLoginActive ? 'space-y-6' : 'space-y-6 hidden'}>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Chào mừng trở lại!</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Đăng nhập để tiếp tục học tập
        </p>
      </div>
      <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e, 'login')}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1 relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
              placeholder="Nhập email của bạn"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-envelope text-gray-400"></i>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
          <div className="mt-1 relative">
            <input
              id="password"
              name="password"
              type={showPasswordLogin ? 'text' : 'password'}
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
              placeholder="Nhập mật khẩu của bạn"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPasswordLogin(!showPasswordLogin)}
            >
              <i className={`fas ${showPasswordLogin ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-edemy input-focus border-gray-300 rounded bg-white"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Ghi nhớ đăng nhập
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-edemy hover:opacity-80">
              Quên mật khẩu?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-edemy hover:bg-edemy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Đăng nhập
          </button>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Hoặc đăng nhập với</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              <i className="fab fa-google text-red-500"></i>
              <span className="ml-2">Google</span>
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              <i className="fab fa-facebook text-blue-600"></i>
              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
