import React from 'react';
import NavBar from '../Components/NavBar'; 

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-indigo-50"> 
      <NavBar setCurrentPage={setCurrentPage} /> 
      
      <div className="container mx-auto p-10 text-center">
        
        <h1 className="text-6xl font-extrabold text-indigo-700 mt-16 mb-8 animate-pulse">
         welcome
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-loose">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, asperiores aliquam. Voluptates placeat consequuntur rerum aliquam. Porro aut consequatur quos magnam repudiandae ad? Corrupti totam explicabo obcaecati quam porro amet?
        </p>
        
        <div className="flex justify-center">
          <img 
            src="https://picsum.photos/seed/react/800/500" 
            
            className="rounded-2xl shadow-xl border-4 border-white transform transition duration-500 hover:rotate-1 hover:shadow-2xl"
            style={{ maxWidth: '90%' }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;