import React, { useState } from "react";
import { Dialog, DialogContent, Button, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import certificates from "./certificate-data";

const CertificatePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const handleOpen = (file) => {
    setSelectedFile(file);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFile("");
  };

  return (
    <div className="page-body-certificates" id="certificates-block">
      <div>
        <h1><b>Certificates and Bootcamps</b></h1>
        <p>Here is a list of my accomplished certificates through courses, tranings and bootcamps. Through those, 
          I had chances to sharpen my skills in Software Development and broaden my horizons.</p>
      </div>
      <div className="certificates-showing">

      </div>
    </div>
  );
};

export default CertificatePage;
