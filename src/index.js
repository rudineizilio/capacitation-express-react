import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NewUserScreen from './screens/newUserScreen/NewUserScreen.jsx';
import EditUserScreen from './screens/editUserScreen/EditUserScreen.jsx';
import reportWebVitals from './reportWebVitals';
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
    path: "/new-user",
    element: <NewUserScreen />,
  },
  {
    path: "/edit-user",
    element: <EditUserScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
