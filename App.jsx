import React, { useState } from 'react';
import Home from './Pages/Home'; 
import Profile from './Pages/Profile';
import Register from './Pages/Register';

function App() {
  const [userData, setUserData] = useState(null); 
  const [currentPage, setCurrentPage] = useState('Home');  
  const handleRegister = (data) => {
    setUserData(data); 
    console.log('User data saved:', data);
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'Profile':
        return <Profile userData={userData} setCurrentPage={setCurrentPage} />; 
      case 'Register':
        return <Register onRegister={handleRegister} setCurrentPage={setCurrentPage} />; 
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;