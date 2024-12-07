import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { useUser } from './components/UserContext';

import TopBar from "./components/TopBar.jsx";
import DropdownMenu from "./components/DropdownMenu.jsx";
import CreditBox from './components/CreditBox.jsx';
import NormalMenu from "./components/normalmenu.jsx";
import FileUpload from "./components/FileUpload.jsx";

import styles from './Print.module.css';

import LogoutIcon from './assets/logout-icon.png';
import HomeIcon from './assets/home-icon.png';
import DashboardIcon from './assets/dashboard-icon.png';
import ProfileIcon from './assets/profile-icon.png';
import RequestIcon from './assets/request-icon.png';
import CartIcon from './assets/cart-icon.png';

import OptionsIcon from './assets/options-icon.png';

function Print() {
    const options1 = ['A4', 'A5', 'A3', 'A2'];
    const options2 = ['Một Mặt', 'Hai Mặt'];
    const options3 = ['Trắng Đen', 'Màu'];
    const remainingCredit = 100; // Example credit value

    const [isCollapsed, setIsCollapsed] = useState(false);

    const { user } = useUser();

    const toggleTaskBar = () => {
      setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.backimage}>
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

            <div className={styles.printOptionContainer}>
                <CreditBox credit={remainingCredit} />

                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdownWrapper}>
                        <label className={styles.dropdownLabel}>Kích Thước Giấy</label>
                        <DropdownMenu options={options1} defaultText="Chọn Kích Thước Giấy" />
                    </div>

                    <div className={styles.dropdownWrapper}>
                        <label className={styles.dropdownLabel}>Số Mặt In</label>
                        <DropdownMenu options={options2} defaultText="Chọn Số Mặt In" />
                    </div>

                    <div className={styles.dropdownWrapper}>
                        <label className={styles.dropdownLabel}>Màu In</label>
                        <DropdownMenu options={options3} defaultText="Chọn Màu In" />
                    </div>

                    <NormalMenu />
                </div>

                

                <FileUpload />
            </div>
        </div>
    );
}

export default Print;