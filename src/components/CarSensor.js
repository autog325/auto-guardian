import React from "react";
import styles from "./CarSensor.module.scss";

function CarSensor() {
  return (
    <div className={styles.sensorBox}>
      <h2>Car Sensor Data</h2>
      <p>
        Information collected in real time from various sensors installed in a
        car.
      </p>
      <p className={styles.sensorButton}>Sensor data</p>
    </div>
  );
}

export default CarSensor;
