import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import styles from "./CarInfo.module.scss";

import CarSensor from "./components/CarSensor";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate, useParams } from "react-router-dom";
import carImg from "./images/Car.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { context } from "./App";

const CarInfo = () => {
  const [car, setCar] = useState({});
  const { carId } = useParams();
  const navigate = useNavigate();
  const consumer = useContext(context);

  useEffect(() => {
    fetch(
      `https://auto-guardian-api.herokuapp.com/api/cars/${carId}?populate=picture,issues`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCar(data.data);
      })
      .catch((error) => console.error(error));
  }, [carId]);

  const handleClickBack = (e) => {
    e.preventDefault();
    navigate(-1);
    consumer.setSignin(true);
  };

  return (
    car &&
    car.attributes && (
      <div className={styles.bigContainer}>
        <div>{<Sidebar />}</div>
        <div className={styles.pageContainer}>
          <div className={styles.titleContainer}>
            <ArrowBackIosNewOutlinedIcon onClick={handleClickBack} />
            <h1>Client Details</h1>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.carDetails}>
              {car && car.attributes && (
                <div className={styles.carDetailsCard}>
                  <div>
                    <h2>Jane Doe</h2>
                    <div className={styles.client}>
                      <p>
                        Customer ID:<span>#00{car.id}</span>
                      </p>
                      <p>
                        Phone:<span>{car.attributes.phoneNumber}</span>
                      </p>
                      <p>
                        Email:<span>{car.attributes.email}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2>Volkswagen {car.attributes.model} (2020)</h2>
                  </div>
                  <img src={carImg} className={styles.image} alt="" />
                  <div className={styles.carSerial}>
                    <p>
                      Serial No.<span>{car.attributes.serialNumber}</span>
                    </p>
                    <p>
                      License plate<span>{car.attributes.licensePlate}</span>
                    </p>
                    <p>
                      Mileage<span>{car.attributes.mileage}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.rightContainer}>
              <div>
                <div className={styles.serviceContainer}>
                  <h2>Service Status</h2>
                  <div className={styles.maintenance}>
                    <div className={styles.icon}>
                      <InfoOutlinedIcon />
                    </div>
                    <div>
                      <p>
                        Vehicle's next recommended maintenance service
                        <span>{car.attributes.nextMaintenanceVisit}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.maintenance}>
                    <div className={styles.icon}>
                      <InfoOutlinedIcon />
                    </div>
                    <div>
                      <p>
                        Average time between vehicle maintenance
                        <span>
                          {
                            car.attributes
                              .numberOfMonthsBetweenMaintenanceVisits
                          }{" "}
                          months
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.maintenance}>
                    <div className={styles.icon}>
                      <InfoOutlinedIcon />
                    </div>
                    <div>
                      <p>
                        Last service maintainance visit
                        <span>{car.attributes.lastMaintenanceVisit}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.userNotification}>
                  <h2>User Notification History</h2>
                  <div className={styles.warnText}>
                    <div className={styles.warnIcon}>
                      {car.attributes.issues.data.length === 0 ? (
                        <CheckCircleOutlineIcon style={{ color: "green" }} />
                      ) : (
                        <WarningAmberRoundedIcon />
                      )}
                    </div>
                    <div className={styles.text}>
                      {car.attributes.issues.data.length === 0
                        ? "No issues found. Everything is good!"
                        : car.attributes.issues.data[0].attributes.description}
                    </div>
                  </div>
                  <div className={styles.gotohistory}>
                    <p>Go to history</p>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                </div>
              </div>
              <div>{<CarSensor />}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CarInfo;
