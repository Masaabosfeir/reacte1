import React, { useState } from 'react';

const Register = ({ onRegister, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    alert(` Successfully registered ${formData.firstName} !   You will be directed to the profile page."  `);
    
    setCurrentPage('Profile'); 
  };

  const inputClass = "w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-150";
  const labelClass = "block text-sm font-medium text-gray-600 mb-1 mt-3";
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100">
      <div className="bg-white p-8 sm:p-10 rounded-[30px] shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <span className="text-indigo-600 text-3xl font-bold">PEPPO</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Create a New Account</h2>
          <p className="text-gray-500 text-sm">Please enter your information to register</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="firstName" className={labelClass}>firstName </label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name  " className={inputClass} required />
          </div>
          
          <div>
            <label htmlFor="lastName" className={labelClass}>lastName </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="  Enter your last name" className={inputClass} required />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>email </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder=" Enter your email address " className={inputClass} required />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}> password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password " className={inputClass} required />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 text-white p-3 rounded-xl font-bold hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-[1.01]"
          >
             Create an Account
          </button>
          
          <div className="text-center pt-4">
            <span className="text-gray-500 text-sm">  you already have an account? </span>
            <button
               type="button"
               onClick={() => alert("سيتم توجيهك لصفحة تسجيل الدخول إذا كانت موجودة!")}
               className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150"
            >
                Login 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;