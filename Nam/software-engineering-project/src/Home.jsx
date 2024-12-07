import React, {useState} from 'react';

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

import OptionsIcon from './assets/options-icon.png';


const Home = () => {
  const { user } = useUser();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTaskBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.backimage}>

      <TopBar />

      <div className={styles.printPage}>

        <img src={PrintIcon} alt="print icon" className={styles.printIcon}/>
        <Link to="/print" className={styles.printLink}>
          Bấm Để In
        </Link>

      </div>

      <div className={isCollapsed ? styles.optionBoxCollapsed : styles.optionBox}>
        
        <button onClick={toggleTaskBar} className={styles.toggleButton}>
          <img src={OptionsIcon} alt="options icon" className={styles.optionsIcon}/>
        </button>

        <p className={styles.optionItem}>
          <img src={LogoutIcon} alt="logout icon" className={styles.icon}/>

          {isCollapsed ? 
          (
            <></>
          ):
          (
            <Link to="/login" className={styles.link}>
              Đăng Xuất
            </Link>
          )
          }
        </p>

        <p className={styles.optionItem}>
          <img src={HomeIcon} alt="home icon" className={styles.icon}/>
          
          {isCollapsed ? 
          (
            <></>
          ):
          (
            <Link to="/home" className={styles.link}>
              Trang Chủ
            </Link>
          )
          }
        </p>

        {/* If the user is admin, only show Logout, Home, SPSO */}
        {/* If the user is student, show Logout, Home, Request, Cart, Profile, Print */}
        {user.role.localeCompare("Admin") == 0 ? 
          (
          <p className={styles.optionItem}>
            <img src={DashboardIcon} alt="dashboard icon" className={styles.icon}/>

            {isCollapsed ? 
            (
              <></>
            ):
            (
              <Link to="/dashboard" className={styles.link}>
                Dashboard
              </Link>
            )
            }
          </p>
          ) : 
          (
          <div>
            <p className={styles.optionItem}>
              <img src={RequestIcon} alt="request icon" className={styles.icon}/>
              
              {isCollapsed ? 
              (
                <></>
              ):
              (
                <Link to="/request" className={styles.link}>
                  Yêu Cầu
                </Link>
              )
              }
            </p>

            <p className={styles.optionItem}>
              <img src={CartIcon} alt="cart icon" className={styles.icon}/>
              
              {isCollapsed ? 
              (
                <></>
              ):
              (
                <Link to="/buy-pages" className={styles.link}>
                  Mua Thêm Trang In
                </Link>
              )
              }
            </p>

            <p className={styles.optionItem}>
              <img src={ProfileIcon} alt="profile icon" className={styles.icon}/>
              
              {isCollapsed ? 
              (
                <></>
              ):
              (
                <Link to="/profile" className={styles.link}>
                  Thông Tin Cá Nhân
                </Link>
              )
              }
            </p>
          
          </div>
        )}
      </div>

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
  );
};

export default Home;