import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import router from './Routes/Routes';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </div>
)