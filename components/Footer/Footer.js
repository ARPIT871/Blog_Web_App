
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ bottom: 0, width: "100%" }}>
        <Grid container sx={{ bgcolor: "black" }}>
          <Grid item xs={12} md={4} sx={{ bgcolor: "black" }}>
            <Card sx={{ bgcolor: "black",color:"white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  About Us
                </Typography>
                <Divider />
                <CardMedia
                  component="img"
                  src="https://celebzero.com/wp-content/uploads/2023/08/logo-white.png"
                  alt="About Us"
                  sx={{ maxWidth: 150, }}
                />
                <Typography variant="body2">
                  Looking for some fashion & beauty inspiration? CelebZero is
                  your catalyst to set new trends every day. Get every detail
                  about the most iconic red carpet looks of the season. Know all
                  about their brands, whereabouts, prices, stylists, and much
                  more. Celebzero believes in bringing out one’s individuality
                  and creativity to the brim.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
           <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: "black",color:"white" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Posts
                </Typography>
                <List>
                  <ListItem sx={{display:"flex"}}>
                    <Link href="https://celebzero.com/nursery-rocking-chair/" underline="none" sx={{color:"white"}}>
                      <CardMedia
                        component="img"
                        image="https://celebzero.com/wp-content/uploads/2024/06/Nursery-rocking-chair-280x186.webp"
                        alt="Comfort And Connection: Why Nursery Rocking Chairs Are Crucial?"
                        sx={{ width: 100, height: 60, mr: 2 }}
                      />
                      <ListItemText primary="Comfort And Connection: Why Nursery Rocking Chairs Are Crucial?" secondary="June 18, 2024" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://celebzero.com/pride-month-in-the-uk/" underline="none"  sx={{color:"white"}} >
                      <CardMedia
                        component="img"
                        image="https://celebzero.com/wp-content/uploads/2024/06/pride-month-in-the-uk-280x186.png"
                        alt="Celebrating Diversity: Pride Month In The UK Explained in Detail"
                        sx={{ width: 100, height: 60, mr: 2 }}
                      />
                      <ListItemText primary="Celebrating Diversity: Pride Month In The UK Explained in Detail" secondary="June 17, 2024" />
                    </Link>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{bgcolor:"black",color:"white"}}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <List>
                  <ListItem>
                    <Link href="https://celebzero.com/about-us/" underline="none">
                      <ListItemText primary="About Us" sx={{color:"white"}} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://celebzero.com/disclaimer/" underline="none">
                      <ListItemText primary="Disclaimer"  sx={{color:"white"}}  />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://celebzero.com/terms-condition/" underline="none">
                      <ListItemText primary="Terms & Conditions"  sx={{color:"white"}} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://celebzero.com/contact-us/" underline="none">
                      <ListItemText primary="Contact Us"  sx={{color:"white"}} />
                    </Link>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
