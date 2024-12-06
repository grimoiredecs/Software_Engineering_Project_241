import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownMenu.module.css';

function DropdownMenu({ options, defaultText }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultText);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropbtn}>{selectedOption}</button>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {options.map((option, index) => (
                        <a key={index} href={`#option${index}`} onClick={() => handleOptionClick(option)}>
                            {option}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

DropdownMenu.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultText: PropTypes.string.isRequired,
};

export default DropdownMenu;