import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CharactersList from "./screens/CharactersList";
import "./App.css";
import Pagination from "./components/Pagination";

export default () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <CharactersList />
        </header>
      </div>
    </QueryClientProvider>
  );
};
