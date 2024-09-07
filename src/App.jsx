import React, { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <h1>Welcome to Pearl Store</h1>
      <button onClick={handleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;
