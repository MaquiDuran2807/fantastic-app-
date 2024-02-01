import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoutes from './components/protectedRouts.tsx';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { AuthProvider } from './auth/auth.tsx';
import AboutPage from './pages/about.tsx';
import LoginPage from './pages/login.tsx';
import TakeTestPage from './pages/takeTest.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'

const queryClient = new QueryClient();
const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/take-test',
          element: <TakeTestPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ],
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider >
        <RouterProvider router={routers}/>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
