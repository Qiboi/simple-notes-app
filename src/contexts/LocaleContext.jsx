import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  const contextValue = useMemo(() => ({ locale, toggleLocale }), [locale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LocaleContext = createContext();