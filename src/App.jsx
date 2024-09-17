import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";

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
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
