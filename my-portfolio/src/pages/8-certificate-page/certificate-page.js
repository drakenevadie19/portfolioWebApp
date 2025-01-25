import React, { useState } from "react";
import { Dialog, DialogContent, Button, CardContent, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import certificates from "./certificate-data";

const CertificatePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const handleOpen = (type, links) => {
    if (type === "codepathT" || type === "codepathW") {
      setSelectedFile(links);
      setOpen(true);
    } else {
      window.open(links, '_blank', 'noopener,noreferrer');
    }
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
          I had chances to sharpen my skills in Software Development and broaden my horizons. Please view in your desktop for best experiene!!</p>
      </div>
      <div className="certificates-showing">
        <Grid container spacing={2}>
          {certificates.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: '12px', padding: "10px" }}>
                <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100"
                      image={cert.imageLink}
                      alt="Company Images"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                      {cert.source}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "500" }}>
                      {cert.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="outlined" onClick={() => handleOpen(cert.type, cert.links)}>
                  View Certificate
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <DialogContent>
            {selectedFile.endsWith(".pdf") && (
              <iframe
              src={`${selectedFile}#zoom=70`}
                width="100%"
                height="700px"
                title="Certificate Preview"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CertificatePage;
