import React, { useState } from "react";
import { Dialog, DialogContent, Button, CardContent, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import certificates from "./certificate-data";
import { maxHeight } from "@mui/system";

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
      <div className="certificate-introduction">
        <h1><b>Certificates and Bootcamps</b></h1>
        <p>Here is a list of my accomplished certificates through courses, tranings and bootcamps. Through those, 
          I had chances to sharpen my skills in Software Development and broaden my horizons.</p>
      </div>
      <div className="certificates-showing">
        <Grid container spacing={2}>
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Card sx={{ borderRadius: '12px', padding: "10px" }}>
                <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      image={cert.imageLink}
                      alt="Company Images"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {cert.source}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {cert.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="outlined" onClick={handleOpen}>
                  View Certificate
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <DialogContent>
            {selectedFile.endsWith(".pdf") ? (
              <iframe
                src="../../resource/"
                width="100%"
                height="600px"
                title="Certificate Preview"
              />
            ) : (
              <img src={selectedFile} alt="Certificate Preview" style={{ width: "100%" }} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CertificatePage;
