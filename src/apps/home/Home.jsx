import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <h1>Welcome</h1>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.cardImg}>
              <img
                src="https://media-exp3.licdn.com/dms/image/C4E03AQFvFxssIl5kGA/profile-displayphoto-shrink_800_800/0/1579537828056?e=1631750400&v=beta&t=9XD7ysZFZp3NhVSSv8uztlbe_CIFNpnRzqJMCaQGOBw"
                className={classes.img}
                alt="profile"
              />
            </div>
            <div className={classes.cardBody}>
              <h3>Naim Sedan</h3>
              <p>FullStack Developer</p>
              <small>Based in London, United Kingdom</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
