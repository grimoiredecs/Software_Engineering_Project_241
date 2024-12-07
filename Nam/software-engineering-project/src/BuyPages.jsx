import React, {useState} from 'react';

import styles from './buypages.module.css';

import { Link } from 'react-router-dom';

import TopBar from './components/TopBar';

import OptionsIcon from './assets/options-icon.png';

import LogoutIcon from './assets/logout-icon.png';
import HomeIcon from './assets/home-icon.png';
import ProfileIcon from './assets/profile-icon.png';
import RequestIcon from './assets/request-icon.png';
import CartIcon from './assets/cart-icon.png';


const BuyPages = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [payments, setPayments] = useState([]);

    const pagePrice = 500;

    const toggleTaskBar = () => {
        setIsCollapsed(!isCollapsed);
      };

    const writePageNumber = (e) => {
        const inputValue = e.target.value;
        if (inputValue >= 0) {
            setPageNumber(inputValue);
        }
    };

    const confirmPurchase = () => {
        if (pageNumber == 0){
            alert("Không Thể Mua Thêm '0' Trang");
            return;
        }

        const totalPrice = pageNumber * pagePrice;
        const newPayment = {number: pageNumber, price: totalPrice};

        setPayments([...payments, newPayment]);
        setPageNumber(0);

        if (payments.length >= 5){
            setPayments(p => p.filter((_, index) => index >= 1));
        }

        alert("Bạn Đã Thêm Hóa Đơn Vào Phần Thanh Toán");
    };

    const removePayment = (index) => {
        setPayments(p => p.filter((_, i) => i != index));

        alert("Bạn Đã Xóa Một Hóa Đơn Ở Phần Thanh Toán");
    };

    return(
        <div className={styles.background}>
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

            
            <div className={styles.purchaseContainer}>

                <div className={styles.inputBox}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>
                            1. Nhập Số Giấy In Cần Mua
                        </div>
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>
                            Số Giấy In Cần Mua
                        </label>

                        <input
                            type="number"
                            className={styles.pageInputBox}
                            value={pageNumber}
                            onChange={writePageNumber}
                        />
                        
                    </div>

                    <div className={styles.confirmationBox}>
                        <label className={styles.confirmationLable}>
                            Giá Một Giấy In: {pagePrice} đồng
                        </label>

                        <label className={styles.confirmationLable}>
                            Thành Tiền: {pageNumber*pagePrice} đồng
                        </label>

                        <button onClick={confirmPurchase} className={styles.confirmButton}>
                            Xác Nhận
                        </button>
                    </div>
                </div>

                <div className={styles.payBox}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>
                            2. Thanh Toán
                        </div>
                    </div>

                    {payments.map((payment, index) => (
                        <div className={styles.paymentBox}>
                            <div className={styles.paymentPageNumber}>
                                Số Tờ : {payment.number}
                            </div>

                            <div className={styles.paymentPrice}>
                                Tổng Tiền : {payment.price}
                            </div>

                            <div className={styles.paymentButtonBox}>
                                <a href="https://bkpay.hcmut.edu.vn/bkpay/home.action" target="_blank" rel="noopener noreferrer" className={styles.payButton}>
                                    Thanh Toán
                                </a>

                                <button onClick={() => removePayment(index)} className={styles.deletePaymentButton}>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))
                    }
                    
                </div>

            </div>
        </div>
    );
}

export default BuyPages;