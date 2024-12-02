import React from 'react';
import logo from '../assets/hcmut-logo.png';
import styles from './topbar.module.css';

const TopBar = () => {
    return(
        <div className={styles.topBar}>
            <img src={logo} alt="hcmut logo" className={styles.logo}></img>
            <h2 className={styles.word}>
                Hệ Thống In Thông Minh Đại Học Bách Khoa TPHCM
            </h2>
        </div>
    );
}

export default TopBar;