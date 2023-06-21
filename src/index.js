import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import NewUserScreen from './screens/newUserScreen/index.jsx';
import EditUserScreen from './screens/editUserScreen/index.jsx';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new-register",
    element: <NewUserScreen />,
  },
  {
    path: "/edit-register",
    element: <EditUserScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ConfigProvider theme={{ token: { colorPrimary: '#5015c9' } }}>
        <App />
      </ConfigProvider>
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
