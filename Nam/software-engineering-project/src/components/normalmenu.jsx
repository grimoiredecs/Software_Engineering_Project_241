import React, { useState } from 'react';
import styles from './normalmenu.module.css';

const NormalMenu = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (/^[1-9]\d*$/.test(newValue) || newValue === '') {
            setValue(newValue);
            setError('');
        } else {
            setError('Vui lòng nhập lại.');
        }
    };

    return (
        <div className={styles.menuContainer}>
            <label className={styles.menuLabel}>Nhập Số Bản In</label>
            <input
                type="text"
                className={styles.menuInput}
                value={value}
                onChange={handleChange}
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
};

export default NormalMenu;