import React, { useEffect, useState } from "react";
import { Navbar } from "./components";

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
      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
    </div>
  );
};

export default App;
