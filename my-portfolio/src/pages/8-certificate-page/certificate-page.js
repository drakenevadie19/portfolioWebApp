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
      <div className="certificate-introduction">
        <h1><b>Certificates and Bootcamps</b></h1>
        <p>Here is a list of my accomplished certificates through courses, tranings and bootcamps. Through those, 
          I had chances to sharpen my skills in Software Development and broaden my horizons.</p>
      </div>
      <div className="certificates-showing">
        <Grid container spacing={2}>
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={cert.image}
                    alt={cert.title}
                  />
                  <div style={{ position: "relative" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ position: "absolute", bottom: "10px", right: "10px" }}
                      onClick={() => handleOpen(cert.file)}
                    >
                      Review
                    </Button>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <DialogContent>
            {selectedFile.endsWith(".pdf") ? (
              <iframe
                src={selectedFile}
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
