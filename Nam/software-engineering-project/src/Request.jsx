import React, {useState} from 'react';

import styles from './request.module.css';

import { Link } from 'react-router-dom';

import TopBar from './components/TopBar';

import OptionsIcon from './assets/options-icon.png';

import LogoutIcon from './assets/logout-icon.png';
import HomeIcon from './assets/home-icon.png';
import DashboardIcon from './assets/dashboard-icon.png';
import ProfileIcon from './assets/profile-icon.png';
import RequestIcon from './assets/request-icon.png';
import CartIcon from './assets/cart-icon.png';


const BuyPages = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleTaskBar = () => {
        setIsCollapsed(!isCollapsed);
      };

    return(
        <div>
            <TopBar />

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
                            Mua Thêm Giấy In
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
            </div>
        </div>
    );
}

export default BuyPages;