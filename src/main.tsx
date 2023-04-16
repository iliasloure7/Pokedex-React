import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FavoritesPokemonsProvider from './context/FavoritesPokemonsProvider/FavoritesPokemonsProvider';
import PaginationProvider from './context/PaginationProvider';
import SidebarProvider from './context/SidebarProvider';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <FavoritesPokemonsProvider>
          <PaginationProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </PaginationProvider>
        </FavoritesPokemonsProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
