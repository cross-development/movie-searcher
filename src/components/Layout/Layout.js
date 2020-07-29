//Core
import React from 'react';
//Styles
import styles from './Layout.module.css';

const Layout = ({ children }) => <section className={styles.section}>{children}</section>;

export default Layout;
