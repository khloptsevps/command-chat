import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './components/providers/AuthProvider.jsx';
import MyNavbar from './components/navbar/MyNavbar.jsx';
import Footer from './components/footer/Footer.jsx';
import MyRoutes from './components/routes/MyRoutes.jsx';

const App = () => (
  <AuthProvider>
    <div className="d-flex flex-column h-100">
      <MyRoutes>
        <MyNavbar />
      </MyRoutes>
      <Footer />
    </div>
    <ToastContainer pauseOnFocusLoss={false} />
  </AuthProvider>
);

export default App;
