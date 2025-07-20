import React, { useState } from 'react';
import SuccessPopup from './pages/SuccessPopup';


const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default App;
