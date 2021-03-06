import React from 'react';
import PropTypes from 'prop-types';
import styles from './MarsFooter.module.css';
import MarsSocial from '../mars-social/MarsSocial'

const MarsFooter = ({
}) => {
  return (
  <>
    <MarsSocial />
    <footer className={styles.footer}>
      <a
        href="https://www.marsgotta.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hecho con amor por Mars Gotta
      </a>
    </footer>
  </>
  );
};

MarsFooter.defaultProps = {
};

MarsFooter.propTypes = {
};

export default MarsFooter;
