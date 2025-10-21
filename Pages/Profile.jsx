import React from 'react';

const Profile = ({ userData, setCurrentPage }) => { 
  
  if (!userData) {
    return (
      <div className="min-h-screen bg-pink-100 p-8 text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">personal Profile </h2>
        <p className="text-xl text-gray-700">  Please register first through the register page to view your information.    </p>
        
        <button
            onClick={() => setCurrentPage('Home')}
            className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
        Return to Home Page
        </button>
      </div>
    );
  }

  const { firstName, lastName, email } = userData; 
  const detailClass = "flex justify-between items-center p-5 bg-white shadow-lg rounded-xl mb-4 transition duration-300 hover:shadow-xl hover:border-indigo-400 border border-gray-100";
  const labelClass = "text-gray-600 font-medium";
  const valueClass = "text-gray-900 font-bold";

  return (
    <div className="min-h-screen bg-pink-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl mt-12">
        <h2 className="text-4xl font-extrabold text-pink-700 text-center mb-10 border-b-4 border-pink-400 pb-2"> Your Profile </h2>
        
        <div className={detailClass}>
          <span className={labelClass}> Full Name:</span>
          <span className={valueClass}>{firstName} {lastName}</span>
        </div>

        <div className={detailClass}>
          <span className={labelClass}>Email Address:</span>
          <span className={valueClass}>{email}</span>
        </div>
        
        <button
            onClick={() => setCurrentPage('Home')}
            className="w-full mt-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Back to Home Page🏠
        </button>

        <div className="mt-8 p-4 bg-pink-200 rounded-xl text-center text-pink-800 font-medium border-l-4 border-pink-500">
          <p> Welcome {firstName} Your registration data has been successfully received.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;