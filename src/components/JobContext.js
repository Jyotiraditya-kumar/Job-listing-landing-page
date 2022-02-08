import React, { createContext, useState } from "react";

export const JobContext = createContext();

// This context provider is passed to any component requiring the context
export const JobContextProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [currentTags, setCurrentTags] = useState({
    count: 0,
    tags: {
      languages: [],
      tools: [],
      level: "",
      role: "",
      new: false,
      featured: false,
    },
  });
  return (
    <JobContext.Provider
      value={{ tags, data, currentTags, setTags, setData, setCurrentTags }}
    >
      {children}
    </JobContext.Provider>
  );
};
