import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreditBox.module.css';

function CreditBox({ credit }) {
    return (
        <div className={styles.creditBox}>
            Số Trang Còn Lại: {credit}
        </div>
    );
}

CreditBox.propTypes = {
    credit: PropTypes.number.isRequired,
};

export default CreditBox;