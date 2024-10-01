import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
import ToastProvider from './components/Toast/ToastProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
);