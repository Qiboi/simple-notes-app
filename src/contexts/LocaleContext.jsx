import React, { createContext, useState, useEffect } from "react";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  // Ambil bahasa dari localStorage, default ke 'id' (Indonesia)
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  // Simpan perubahan bahasa ke localStorage
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  // Fungsi untuk mengubah bahasa
  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};