import React from "react";
import { Typography } from "@mui/material";

const Location = () => {
  return (
    <div className="locationContainer">
      <Typography variant="h4" textAlign="center">
        Where are we located?
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d552.4961082736663!2d21.940637207221663!3d41.86377929142516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1678995502907!5m2!1sen!2smk"
        className="location"
        style={{ border: "0" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
