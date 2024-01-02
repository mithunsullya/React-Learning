import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchParam from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Detail from "./Detail";
import contextData from "./createContextData";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  const contextState = useState(false);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <contextData.Provider value={contextState}>
          <div className="basic-jsx">
            <h1>
              {" "}
              <Link to="/">Search Param </Link>
            </h1>
            <Routes>
              <Route path="/details/:id" element={<Detail />} />
              <Route path="/" element={<SearchParam />} />
            </Routes>
          </div>
        </contextData.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
