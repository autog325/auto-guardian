import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Content.module.scss";

const Content = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch(
      `https://auto-guardian-api.herokuapp.com/api/cars?populate=picture,issues`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("sasas", data.data);
        setCarData(data.data);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Dashboard</h1>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tr>
              <th>Customer ID</th>
              <th>Car brand</th>
              <th>Car model</th>
              <th>Year</th>
              <th>Issues by customer</th>
            </tr>
            {carData.map((car, id) => {
              return (
                <tr>
                  <td>
                    <Link key={id} to={`/car-info/${car.id}`}>
                      #00{car.id}
                    </Link>
                  </td>
                  <td>Wolkswagen</td>
                  <td>{car.attributes.model}</td>
                  <td>{car.attributes.year}</td>
                  <td>
                    {car.attributes.numberOfIssues}{" "}
                    {car.attributes.numberOfIssues > 1 ? "issues" : "issue"}
                  </td>
                </tr>
              );
            })}
            {/* {carData.map((car) => {
              return (
                <tr>
                  <td>
                    <Link to="/car-info">#00{car.id}</Link>
                  </td>
                  <td>Wolkswagen</td>
                  <td>{car.attributes.model}</td>
                  <td>{car.attributes.year}</td>
                  <td>
                    {car.attributes.numberOfIssues}{" "}
                    {car.attributes.numberOfIssues > 1 ? "issues" : "issue"}
                  </td>
                </tr>
              );
            })}
            {carData.map((car, id) => {
              return (
                <tr>
                  <td>
                    <Link to={`/car-info/${car.id}`}>#00{car.id}</Link>
                  </td>
                  <td>Wolkswagen</td>
                  <td>{car.attributes.model}</td>
                  <td>{car.attributes.year}</td>
                  <td>
                    {car.attributes.numberOfIssues}{" "}
                    {car.attributes.numberOfIssues > 1 ? "issues" : "issue"}
                  </td>
                </tr>
              );
            })} */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Content;
