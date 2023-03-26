import React from "react";
import styles from "./Dashboard.module.scss";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.conetnt}>
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
