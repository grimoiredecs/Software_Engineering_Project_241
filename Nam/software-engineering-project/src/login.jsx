import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import TopBar from './components/TopBar'
import { useUser } from './components/UserContext';

const LoginPage = () => {
  // State to manage form inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser } = useUser();

  // Dummy credentials
    const dummyAccount = [  { username: "admin", password: "admin123", role: "Admin" },
                            { username: "student", password: "student123", role: "Student" }];

    const navigate = useNavigate()


  // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const account = dummyAccount.find(
            (acc) => acc.username === username && acc.password === password
        );

        // Validate user credentials
        if (account) {

            setUser(account)
            if(account.role.localeCompare("Admin") == 0){
                alert('Bạn Đã Đăng Nhập Với Tư Cách Là Quản Trị Viên');
            }
            else{
                alert('Bạn Đã Đăng Nhập Với Tư Cách Là Sinh Viên');
            }
            navigate('/home')
        } else {
            setError('Username hoặc Password không hợp lệ');
        }
    };

    return (
        <div className={styles.backimage}>

            <TopBar />

            <div className={styles.container}>
                <h2 className={styles.word}>
                    Đăng Nhập
                </h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Username
                    </label>

                    <div>
                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        />
                    </div>

                    <label className={styles.label}>
                        Password
                    </label>
                    
                    <div>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        />
                    </div>

                    <div className={styles.error}>
                        {error && <p>{error}</p>}
                    </div>

                    <button type="submit" className={styles.button}>
                        Đăng Nhập
                    </button>

                </form>
            </div>

        </div>
    );
};

export default LoginPage;
