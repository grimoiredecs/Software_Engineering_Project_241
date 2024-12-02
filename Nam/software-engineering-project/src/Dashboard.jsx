import React from 'react';
import styles from './dashboard.module.css';
import TopBar from './components/TopBar';
import { Link } from 'react-router-dom';
import LogoutIcon from './assets/logout-icon.png';
import HomeIcon from './assets/home-icon.png';
import DashboardIcon from './assets/dashboard-icon.png';

const Dashboard = () => {
    let printHistory = [
        {paperSize: "A4", noPaper: 1, dateTime: new Date(2024, 10, 25, 17, 10), studentId: 2314560, printResult: "In thành công"},
        {paperSize: "A5", noPaper: 3, dateTime: new Date(2024, 10, 20, 18, 0), studentId: 2451293, printResult: "Tài khoản quá lượt in"},
        {paperSize: "A2", noPaper: 2, dateTime: new Date(2023, 11, 3, 14, 12), studentId: 2134872, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 21, dateTime: new Date(2024, 3, 28, 7, 55), studentId: 2346728, printResult: "In thành công"},
        {paperSize: "A3", noPaper: 5, dateTime: new Date(2024, 5, 15, 19, 23), studentId: 2075469, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 33, dateTime: new Date(2024, 2, 14, 10, 25), studentId: 2289547, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 21, dateTime: new Date(2024, 7, 10, 17, 40), studentId: 2432188, printResult: "Tài khoản quá lượt in"},
        {paperSize: "A4", noPaper: 10, dateTime: new Date(2024, 11, 2, 15, 33), studentId: 2103945, printResult: "Tệp lỗi"},
        {paperSize: "A3", noPaper: 5, dateTime: new Date(2023, 10, 25, 13, 47), studentId: 2346581, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 51, dateTime: new Date(2024, 10, 13, 9, 19), studentId: 2228934, printResult: "Máy Hết Mực"},
        {paperSize: "A2", noPaper: 3, dateTime: new Date(2024, 6, 19, 20, 8), studentId: 2479663, printResult: "Tệp lỗi"},
        {paperSize: "A4", noPaper: 44, dateTime: new Date(2024, 8, 21, 15, 18), studentId: 2311702, printResult: "In thành công"}
        ,
        {paperSize: "A4", noPaper: 12, dateTime: new Date(2024, 2, 11, 12, 40), studentId: 2438908, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 11, dateTime: new Date(2024, 6, 1, 12, 43), studentId: 2114235, printResult: "In thành công"},
        {paperSize: "A3", noPaper: 3, dateTime: new Date(2023, 11, 30, 9, 42), studentId: 2241871, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 20, dateTime: new Date(2024, 5, 11, 13, 21), studentId: 2210948, printResult: "Máy Hết Mực"},
        {paperSize: "A2", noPaper: 1, dateTime: new Date(2024, 9, 19, 10, 45), studentId: 2417284, printResult: "In thành công"},
        {paperSize: "A4", noPaper: 22, dateTime: new Date(2024, 8, 22, 11, 13), studentId: 2397842, printResult: "In thành công"}
    ];

    return(
        <div className={styles.page}>

            <TopBar/>

            <div className={styles.optionBox}>
                
                <p className={styles.optionItem}>
                    <img src={LogoutIcon} alt="logout icon" className={styles.icon}></img>
                    <Link to="/login" className={styles.link}>
                    Đăng Xuất
                    </Link>
                </p>

                <p className={styles.optionItem}>
                    <img src={HomeIcon} alt="home icon" className={styles.icon}></img>
                    <Link to="/home" className={styles.link}>
                    Trang Chủ
                    </Link>
                </p>

                <p className={styles.optionItem}>
                    <img src={DashboardIcon} alt="dashboard icon" className={styles.icon}></img>
                    <Link to="/dashboard" className={styles.link}>
                        Dashboard (SPSO)
                    </Link>
                </p>
                    
            </div>

            <div className={styles.scrollBox}>
                <div className={styles.printField}>
                    <p className={styles.paperSizeField}>Khổ Giấy</p>
                    <p className={styles.paperNumberField}>Số Lượng</p>
                    <p className={styles.printDateField}>Ngày</p>
                    <p className={styles.printTimeField}>Thời Gian</p>
                    <p className={styles.studentIdField}>MSSV</p>
                    <p className={styles.printResultField}>Kết Quả</p>
                </div>

                {printHistory.map((printRecord) => (
                    <div className={styles.printDetail}>
                        <p className={styles.paperSizeDetail}>{printRecord.paperSize}</p>
                        <p className={styles.paperNumberDetail}>{printRecord.noPaper}</p>
                        <p className={styles.printDateDetail}>
                            {printRecord.dateTime.getDate().toString().padStart(2, '0')}
                            /{(printRecord.dateTime.getMonth()+1).toString().padStart(2, '0')}
                            /{printRecord.dateTime.getFullYear()}
                        </p>
                        <p className={styles.printTimeDetail}>
                            {printRecord.dateTime.getHours().toString().padStart(2, '0')}
                            :{printRecord.dateTime.getMinutes().toString().padStart(2, '0')}
                        </p>
                        <p className={styles.studentIdDetail}>{printRecord.studentId}</p>
                        <p className={styles.printResultDetail}>{printRecord.printResult}</p>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Dashboard; 