import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.scss";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import user from "../images/User.svg";
import logo from "../images/Logo2.svg";
import { context } from "../App";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const consumer = useContext(context);
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  const hanleClickLogOut = () => {
    consumer.setSignin(false);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.logo} />
      </div>
      <div className={styles.profileContainer}>
        <img src={user} className={styles.image} alt="" />
        <div className={styles.profileDetails}>
          <p>
            Jane Doe <span>admin</span>
          </p>
        </div>
        <KeyboardArrowDownOutlinedIcon className={styles.downArrow} />
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonContainerDashboard}>
          <WidgetsOutlinedIcon />
          <p>Dashboard</p>
        </div>
        <div className={styles.buttonContainer}>
          <SettingsOutlinedIcon />
          <p>Components</p>
        </div>
        <div className={styles.buttonContainer}>
          <CarRepairOutlinedIcon />
          <p>Service</p>
        </div>
        <div
          className={styles.buttonContainerLogOut}
          onClick={hanleClickLogOut}
        >
          <PowerSettingsNewOutlinedIcon />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
