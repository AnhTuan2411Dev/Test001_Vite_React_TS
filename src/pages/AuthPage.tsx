import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { assets } from '../assets/assets';
import '../css/AuthPage.css';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const [isLoginActive, setIsLoginActive] = useState(location.state?.isLoginActive !== undefined ? location.state.isLoginActive : true);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);
  const [showConfirmPasswordRegister, setShowConfirmPasswordRegister] = useState(false);

  const regPasswordRef = useRef<HTMLInputElement | null>(null);
  const strengthBarsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
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
            <SignIn
              isLoginActive={isLoginActive}
              showPasswordLogin={showPasswordLogin}
              setShowPasswordLogin={setShowPasswordLogin}
              handleFormSubmit={handleFormSubmit}
            />

            {/* Register Form */}
            <SignUp
              isLoginActive={isLoginActive}
              showPasswordRegister={showPasswordRegister}
              setShowPasswordRegister={setShowPasswordRegister}
              showConfirmPasswordRegister={showConfirmPasswordRegister}
              setShowConfirmPasswordRegister={setShowConfirmPasswordRegister}
              handleFormSubmit={handleFormSubmit}
              regPasswordRef={regPasswordRef}
              strengthBarsRef={strengthBarsRef}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AuthPage;
