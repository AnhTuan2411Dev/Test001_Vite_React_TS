import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const [isLoginActive, setIsLoginActive] = useState(location.state?.isLoginActive !== undefined ? location.state.isLoginActive : true);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showConfirmPasswordRegister, setShowConfirmPasswordRegister] = useState(false);

  const regPasswordRef = useRef<HTMLInputElement>(null);
  const strengthBarsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  useEffect(() => {
    // Password strength indicator
    const handlePasswordInput = () => {
      const password = regPasswordRef.current?.value || '';
      let strength = 0;

      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      strengthBarsRef.current?.forEach((bar, index) => {
        if (index < strength) {
          bar.classList.remove('bg-gray-200');
          if (strength <= 2) {
            bar.classList.add('bg-red-400');
          } else if (strength === 3) {
            bar.classList.add('bg-yellow-400');
          } else {
            bar.classList.add('bg-green-400');
          }
        } else {
          bar.classList.add('bg-gray-200');
          bar.classList.remove('bg-red-400', 'bg-yellow-400', 'bg-green-400');
        }
      });
    };

    if (regPasswordRef.current) {
      regPasswordRef.current.addEventListener('input', handlePasswordInput);
      strengthBarsRef.current = document.querySelectorAll('#registerForm .h-1') as NodeListOf<HTMLDivElement>;
    }

    return () => {
      if (regPasswordRef.current) {
        regPasswordRef.current.removeEventListener('input', handlePasswordInput);
      }
    };
  }, [isLoginActive]); // Re-run effect when tab changes to re-attach listener if needed

  useEffect(() => {
    if (location.state?.isLoginActive !== undefined) {
      setIsLoginActive(location.state.isLoginActive);
    }
  }, [location.state]);

  const handleFormSubmit = (e: React.FormEvent, formType: 'login' | 'register') => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    (inputs as NodeListOf<HTMLInputElement>).forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('border-red-500');
        isValid = false;
      } else {
        input.classList.remove('border-red-500');
      }
    });

    if (formType === 'register') {
      const passwordInput = form.querySelector('#regPassword') as HTMLInputElement;
      const confirmPasswordInput = form.querySelector('#confirmPassword') as HTMLInputElement;

      if (passwordInput && confirmPasswordInput) {
        if (passwordInput.value !== confirmPasswordInput.value) {
          confirmPasswordInput.classList.add('border-red-500');
          isValid = false;
        } else {
          confirmPasswordInput.classList.remove('border-red-500');
        }
      }
    }

    if (isValid) {
      alert(`Form ${formType} submitted successfully!`);
      // Here you would typically send the data to your server
    }
  };

  return (
    <>
      <div className="bg-gray-50 pt-16">
        <Header logoComponent={<img src={assets.logo} alt="Edemy Logo" className="h-8" />} />

        {/* Main Content */}
        <main className="form-container flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* Toggle Buttons */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                id="loginTab"
                onClick={() => setIsLoginActive(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition duration-200 ${
                  isLoginActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Đăng nhập
              </button>
              <button
                id="registerTab"
                onClick={() => setIsLoginActive(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition duration-200 ${
                  !isLoginActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Đăng ký
              </button>
            </div>

            {/* Login Form */}
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

            {/* Register Form */}
            <div id="registerForm" className={!isLoginActive ? 'space-y-6' : 'space-y-6 hidden'}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center">Tạo tài khoản</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Tham gia Edemy để bắt đầu hành trình học tập
                </p>
              </div>
              <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e, 'register')}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Họ</label>
                    <div className="mt-1 relative">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
                        placeholder="Họ"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Tên</label>
                    <div className="mt-1 relative">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
                      placeholder="Tên"
                    />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="regEmail" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 relative">
                    <input
                      id="regEmail"
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
                  <label htmlFor="regPassword" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                  <div className="mt-1 relative">
                    <input
                      id="regPassword"
                      name="password"
                      type={showPasswordRegister ? 'text' : 'password'}
                      required
                      ref={regPasswordRef}
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
                      placeholder="Tạo mật khẩu mạnh"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-gray-400"></i>
                    </div>
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPasswordRegister(!showPasswordRegister)}
                    >
                      <i className={`fas ${showPasswordRegister ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs text-gray-500">Mật khẩu phải có ít nhất 8 ký tự</div>
                    <div className="flex mt-1 space-x-1">
                      <div className="flex-1 h-1 bg-gray-200 rounded" data-testid="strength-bar"></div>
                      <div className="flex-1 h-1 bg-gray-200 rounded" data-testid="strength-bar"></div>
                      <div className="flex-1 h-1 bg-gray-200 rounded" data-testid="strength-bar"></div>
                      <div className="flex-1 h-1 bg-gray-200 rounded" data-testid="strength-bar"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                  <div className="mt-1 relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPasswordRegister ? 'text' : 'password'}
                      required
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 input-focus focus:outline-none focus:ring-0 sm:text-sm bg-white"
                      placeholder="Nhập lại mật khẩu"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-gray-400"></i>
                    </div>
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowConfirmPasswordRegister(!showConfirmPasswordRegister)}
                    >
                      <i className={`fas ${showConfirmPasswordRegister ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    required
                      className="h-4 w-4 text-edemy input-focus border-gray-300 rounded bg-white"
                  />
                  <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                    Tôi đồng ý với
                    <a href="#" className="text-edemy hover:opacity-80 font-medium"> Điều khoản dịch vụ </a>
                    và
                    <a href="#" className="text-edemy hover:opacity-80 font-medium"> Chính sách bảo mật </a>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-edemy hover-bg-edemy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    Tạo tài khoản
                  </button>
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-50 text-gray-500">Hoặc đăng ký với</span>
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
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AuthPage;
