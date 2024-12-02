import React from 'react';

import styles from './home.module.css';

import { useUser } from './components/UserContext';
import { Link } from 'react-router-dom';

import TopBar from './components/TopBar';

import LogoutIcon from './assets/logout-icon.png';
import HomeIcon from './assets/home-icon.png';
import DashboardIcon from './assets/dashboard-icon.png';
import ProfileIcon from './assets/profile-icon.png';
import RequestIcon from './assets/request-icon.png';
import CartIcon from './assets/cart-icon.png';

import PrintIcon from './assets/print-icon.png';

import LocationIcon from './assets/location-icon.png';
import PhoneIcon from './assets/phone-icon.png';
import MailIcon from './assets/mail-icon.png';


const Home = () => {
  const { user } = useUser();

  return (
    <div className={styles.backimage}>

      <TopBar />

      <div className={styles.printPage}>
        <img src={PrintIcon} alt="print icon" className={styles.printIcon}/>
        <Link to="/unavailable" className={styles.printLink}>
          Bấm Để In
        </Link>
      </div>

      <div className={styles.optionBox}>
        <p className={styles.optionItem}>
          <img src={LogoutIcon} alt="logout icon" className={styles.icon}/>
          <Link to="/login" className={styles.link}>
            Đăng Xuất
          </Link>
        </p>

        <p className={styles.optionItem}>
          <img src={HomeIcon} alt="home icon" className={styles.icon}/>
          <Link to="/home" className={styles.link}>
            Trang Chủ
          </Link>
        </p>

        {/* If the user is admin, only show Logout, Home, SPSO */}
        {/* If the user is student, show Logout, Home, Request, Cart, Profile, Print */}
        {user.role.localeCompare("Admin") == 0 ? 
          (
          <p className={styles.optionItem}>
            <img src={DashboardIcon} alt="dashboard icon" className={styles.icon}/>
            <Link to="/dashboard" className={styles.link}>
              Dashboard (SPSO)
            </Link>
          </p>
          ) : 
          (
          <div>
            <p className={styles.optionItem}>
              <img src={RequestIcon} alt="request icon" className={styles.icon}/>
              <Link to="/unavailable" className={styles.link}>
                Yêu Cầu
              </Link>
            </p>

            <p className={styles.optionItem}>
              <img src={CartIcon} alt="cart icon" className={styles.icon}/>
              <Link to="/unavailable" className={styles.link}>
              Giỏ Hàng
              </Link>
            </p>

            <p className={styles.optionItem}>
              <img src={ProfileIcon} alt="profile icon" className={styles.icon}/>
              <Link to="/unavailable" className={styles.link}>
              Thông Tin Cá Nhân
              </Link>
            </p>
          </div>
          )}

          <div className={styles.contactBox}>
            <p className={styles.contact}>
              Contact
            </p>

            <div className={styles.contactDetail}>
              <img src={LocationIcon} alt="location icon" className={styles.contactIcon}/>
              268 Lý Thường Kiệt, P.14, Q.10, TP.HCM
            </div>

            <div className={styles.contactDetail}>
              <img src={PhoneIcon} alt="phone icon" className={styles.contactIcon}/>
              0123456789
            </div>

            <div className={styles.contactDetail}>
              <img src={MailIcon} alt="mail icon" className={styles.contactIcon}/>
              1234@hcmut.edu.vn
            </div>
          </div>

      </div>


    </div>
  );
};

export default Home;