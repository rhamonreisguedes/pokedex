import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query/devtools';
import Pokedex from "./pokedex/Pokedex";
import PokemonDetails from "./pokemon/services/PokemonDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      cacheTime: 1000 * 60 * 60 * 15,
      retry: 10,
      retryDelay: 1000,
      refetchOnWindowFocus: true,
    }
  }
});

export const Rotas = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Rotas;
