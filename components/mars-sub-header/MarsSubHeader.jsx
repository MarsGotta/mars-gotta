import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsSubHeader.module.css'
import MarsStars from '../mars-stars/MarsStars'

const MarsSubHeader = ({
  title,
  className,
}) => {
  return (
    <div className={`${styles['sub-header']} ${className}`}>
      <MarsStars limit={10}/>
      <section  className={styles['title-box']}>
        <h1 className={styles['title']}>{title}</h1>
      </section>
    </div>
    );
};

MarsSubHeader.defaultProps = {
  title: ''
};

MarsSubHeader.propTypes = {
  title: PropTypes.string,
};

export default MarsSubHeader;
