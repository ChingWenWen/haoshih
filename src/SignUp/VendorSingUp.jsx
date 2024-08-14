import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBarShop from "../components/NavBarShop";
import VendorSignUpForm from "./components/VendorSignUpForm";
import SingUpMain from "./components/SingUpMain";

const VendorSignUp = () => {
  const navigate = useNavigate();

  const doRegSuccess = () => {
    console.log('攤販註冊成功');
    alert('攤販註冊成功！');
    navigate('/login');
  };

  return (
    <>
      <NavBarShop />
      <SingUpMain title="攤販會員註冊" />
      <div className="f-center p-5 border">
        <VendorSignUpForm onRegSuccess={doRegSuccess}/>
      </div>
      <Footer />
    </>
  );
};

export default VendorSignUp;