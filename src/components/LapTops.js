import * as React from "react";


import { experimentalStyled as styled } from "@mui/material/styles";
import {
  landingCaro, itemData, itemData1, itemData2, itemData4, itemData5, itemData6, itemData7, itemData8, itemData9, itemData10, itemData11,
  itemData12, itemData13, itemData14, itemData15
} from "./Data";

import 'react-responsive-modal/styles.css';

import { Modal } from 'react-responsive-modal';
import Carousel1, { consts } from "react-elastic-carousel";

import Grid from '@mui/material/Unstable_Grid2';
import "react-responsive-modal/styles.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

//import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import { Button, Typography, Link, Box, Paper, Card } from "@mui/material";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




function Page() {


  const [open2, setOpen2] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  

  function onOpenModal2() {
    setOpen2(true);
  }
  function onOpenModal1() {
    setOpen1(true);
  }
  function onCloseModal1() {
    setOpen1(false);
  }
  function onOpenModal3() {
    setOpen3(true);
  }
  function onCloseModal3() {
    setOpen3(false);
  }
  function onOpenModal4() {
    setOpen4(true);
  }
  function onCloseModal4() {
    setOpen4(false);
  }
  function onOpenModal5() {
    setOpen5(true);
  }
  function onCloseModal5() {
    setOpen5(false);
  }
  function onOpenModal6() {
    setOpen6(true);
  }
  function onCloseModal6() {
    setOpen6(false);
  }
  function onCloseModal2() {
    setOpen2(false);
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];


  return (






    <Box sx={{ flexGrow: 1 }} >


      <FloatingWhatsApp accountName="Poorvika" avatar="https://www.bing.com/th?id=AMMS_S_df52728f-6902-1e68-e493-6ed24141bd40&w=72&h=72&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1" statusMessage="Vanakkam!!!" />

      <div className="carousel-wrapper ">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={0} showStatus={0}  >
          {landingCaro.map((item) => (
            <div key={item.img}>
              <img src={`${item.img}`}
                alt={item.alt_title} />
            </div>))}

        </Carousel>
      </div>
 
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >


        <Grid xs={12} sm={12} md={12} spacing={0} sx={{ padding: "none", }}>

          <Item sx={{ boxShadow: "none", backgroundColor: "transparent", padding: "none", }} className='carobotimg'>
            <img
              src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Laptops-Cyber-Sale-Banner.webp"
              alt="Laptops-Cyber-Sale-Banner"
              className="cimg"
            />
          </Item>
        </Grid>
      </Grid>
      <br></br>
      <Box sx={{ backgroundColor: '#ECE0E4', padding: '20px',margin:2, borderRadius: 7 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 12, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12} sm={6} md={6} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold" }}
                fontSize={{
                  lg: 30,
                  md: 25,
                  sm: 24,
                  xs: 20
                }}
              >
                What's your Pick?
              </Typography>
            </Item>
          </Grid>
        </Grid>


        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 9 }}
          direction="row"
          justifyContent="center"
          alignItems="center"

        >
          <Grid xs={4} sm={4} md={3}  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button onClick={onOpenModal1} href="" underline="none">

                <img
                  className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Deals-of-the-day.webp"

                  height="150"
                  alt="Deals-of-the-day"
                />
              </Button>
            </Item>
            <div>

              <Modal open={open1} onClose={onCloseModal1} center>

                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 2, sm: 8, md: 9 }}
                  direction="row"
                  justifyContent="center"

                  alignItems="center"
                >{itemData9.map((item) => (
                  <Grid xs={2} sm={4} md={2.5} key={item.img} >
                    <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }} >
                      <Button href={item.link} underline="none">
                        <img className="imgg"
                          src={`${item.img}`}


                          height="280"
                          alt={item.alt_title}
                        />
                      </Button>
                    </Item>
                  </Grid>))}

                </Grid>
              </Modal>

            </div>
          </Grid>

          <Grid xs={4} sm={4} md={3} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>

              <Button href="" underline="none" onClick={onOpenModal2} >
                <img className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Windows-Laptops.webp"
                  height="150"
                  alt="Windows-Laptops"
                />

              </Button>

            </Item>
            <div>
            <Modal open={open2} onClose={onCloseModal2} center>

<Grid
  container
  spacing={{ xs: 0, md: 0 }}
  columns={{ xs: 2, sm: 8, md: 9 }}
  direction="row"
  justifyContent="center"

  alignItems="center"
>{itemData10.map((item) => (
  <Grid xs={2} sm={4} md={2.5} key={item.img} >
    <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }} >
      <Button href={item.link} underline="none">
        <img className="imgg"
          src={`${item.img}`}


          height="280"
          alt={item.alt_title}
        />
      </Button>
    </Item>
  </Grid>))}

</Grid>
</Modal>
           
            </div>

          </Grid>
          <Grid xs={4} sm={4} md={3} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none" onClick={onOpenModal3}>
                <img className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/new-launch-laptops.webp"
                  height="150"
                  alt="new-launch-laptops"
                />
              </Button>
            </Item>
            <div>

              <Modal open={open3} onClose={onCloseModal3} center>

                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 2, sm: 8, md: 9 }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >{itemData11.map((item) => (
                  <Grid xs={2} sm={4} md={2.5} key={item.img} >
                    <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
                      <Button href={item.link} underline="none">
                        <img className="imgg"
                          src={`${item.img}`}


                          height="280"
                          alt={item.alt_title}
                        />
                      </Button>
                    </Item>
                  </Grid>))}

                </Grid>
              </Modal>

            </div>
          </Grid>
          <Grid xs={4} sm={4} md={3} sx={{ boxShadow: "none", backgroundColor: "transparent" }} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none" onClick={onOpenModal4}>
                <img className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Macbooks-laptops.webp"
                  height="150"
                  alt="new-launch-laptops"
                />
              </Button>
            </Item>
          </Grid>
          <div>

            <Modal open={open4} onClose={onCloseModal4} center>
              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 2, sm: 8, md: 9 }}
                direction="row"
                justifyContent="center"
                alignItems="center"

              >{itemData12.map((item) => (
                <Grid xs={2} sm={4} md={2.5} key={item.img} >
                  <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
                    <Button href={item.link} underline="none">
                      <img className="imgg"
                        src={`${item.img}`}


                        height="280"
                        alt={item.alt_title}
                      />
                    </Button>
                  </Item>
                </Grid>))}

              </Grid>
            </Modal>

          </div>
          <Grid xs={4} sm={4} md={3} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none" onClick={onOpenModal5}>
                <img className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Gaming-Laptop.webp"
                  height="150"
                  alt="Gaming-Laptop"
                />
              </Button>
            </Item>
          </Grid>
          <div>

            <Modal open={open5} onClose={onCloseModal5} center>

              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 2, sm: 8, md: 9 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >{itemData13.map((item) => (
                <Grid xs={2} sm={4} md={2.5} key={item.img} >
                  <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
                    <Button href={item.link} underline="none">
                      <img
                        src={`${item.img}`}
                        className="imgg"

                        height="280"
                        alt={item.alt_title}
                      />
                    </Button>
                  </Item>
                </Grid>))}

              </Grid>
            </Modal>

          </div>
          <Grid xs={4} sm={4} md={3} >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>

              <Button href="" underline="none" onClick={onOpenModal6}>
                <img className="imgg"
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/2-IN-1-Laptops.webp"
                  height="150"
                  alt="2-IN-1-Laptops"
                />
              </Button>
            </Item>
          </Grid>
          <div>

            <Modal open={open6} onClose={onCloseModal6} center>

              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 2, sm: 8, md: 9 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >{itemData14.map((item) => (
                <Grid xs={2} sm={4} md={2.5} key={item.img} >
                  <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
                    <Button href={item.link} underline="none">
                      <img
                        src={`${item.img}`}
                        className="imgg"

                        height="280"
                        alt={item.alt_title}
                      />
                    </Button>
                  </Item>
                </Grid>))}

              </Grid>
            </Modal>

          </div>
        </Grid>



      </Box>
      <br></br>



      <Box sx={{padding:'20px'}}>
        <div className="carousel-wrapper caroimg " >

          <Carousel1 breakPoints={breakPoints}   pagination={false} itemPosition={consts.CENTER} className="rec rec-carousel-item rec-arrow">
            {itemData15.map((item) => (
              <Item key={item.img} className="caroimg" sx={{ backgroundColor: "transparent", boxshadow: 'none', border: 'none', padding: 'none' }}> <img
                src={`${item.img}`}

                height="120"
                alt={item.alt_title}
              /></Item>
            ))}
          </Carousel1>
        </div>

      </Box>




      <br></br>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 10, sm: 10, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={12} sm={6} md={4} >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <Typography
              variant="h4"
              color="initial"
              sx={{ fontWeight: "bold", }}
              fontSize={{
                lg: 30,
                md: 25,
                sm: 24,
                xs: 20
              }}
            >
              What's your purpose?
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"

      > {itemData.map((item) => (
        <Grid xs={2} sm={1.6} md={1.8} key={item.img}>
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent", textAlign: 'center', alignItems: "center" }}>
            <Card sx={{ backgroundColor: "transparent" }}> <Link href={item.link} underline="none">
              <img
                src={`${item.img}`}

                height="110"
                alt={item.alt_title}

              /> <Box sx={{ backgroundColor: '#8B8A89' }}><Typography variant="button" sx={{ textTransform: 'none', textAlign: 'center', color: 'white', fontSmooth: 4, fontWeight: 'bold' }} >
                {item.title}
              </Typography></Box>
            </Link></Card>

          </Item>
        </Grid>
      ))}


      </Grid>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 10, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={4} sm={3} md={4} >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <Typography
              variant="h4"
              color="initial"
              sx={{ fontWeight: "bold" }}
              fontSize={{
                lg: 30,
                md: 25,
                sm: 24,
                xs: 20
              }}
            >
              Processor
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"

      >
        {itemData1.map((item) => (
          <Grid xs={1.7} sm={2.3} md={1.6} key={item.img}>
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>

              <Link href={item.link} underline="none">
                <img
                  src={`${item.img}`}

                  height="140"
                  alt={item.alt_title}
                />
              </Link>
            </Item>
          </Grid>
        ))}

      </Grid>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 10, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={4} sm={4} md={4} >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <Typography
              variant="h4"
              color="initial"
              sx={{ fontWeight: "bold" }}
              fontSize={{
                lg: 30,
                md: 25,
                sm: 24,
                xs: 20
              }}
            >
              Screen size
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 0, md: 1 }}
        columns={{ xs: 4, sm: 10, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"

      >{itemData2.map((item) => (
        <Grid xs={2} sm={3} md={1.8} key={item.img}>
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <Link href={item.link} underline="none">
              <img
                src={`${item.img}`}

                height="150"
                alt={item.alt_title}
              />
            </Link>
          </Item>
        </Grid>))}

      </Grid>
      <Box sx={{ backgroundColor: '#ECE0E4', padding: '20px', borderRadius: 7 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid xs={12} sm={2} md={3} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Head Office
              </Typography>
              {itemData4.map((item) => (
                <Typography variant="body2" color="initial" key={item.address}>
                  {item.address}
                </Typography>))}

            </Item>
          </Grid>
          <Grid xs={2} sm={2} md={2} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Support
              </Typography> {itemData5.map((item) => (
                <Typography variant="body2" color="initial" key={item.support}>
                  {item.support}
                </Typography>))}

            </Item>
          </Grid>
          <Grid xs={2} sm={2} md={2} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Policies
              </Typography>  {itemData6.map((item) => (
                <Typography variant="body2" color="initial" key={item.Policies}>
                  {item.Policies}
                </Typography>))}

            </Item>
          </Grid>
          <Grid xs={2} sm={2} md={2} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Opportunities
              </Typography>
              <Typography variant="body2" color="initial">
                Careers
              </Typography>
            </Item>
          </Grid>
          <Grid xs={2} sm={2} md={2} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Know More
              </Typography>
              {itemData7.map((item) => (
                <Typography variant="body2" color="initial" key={item.knowmore}>
                  {item.knowmore}
                </Typography>))}

            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={12} sm={10} md={11} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                About Us:
              </Typography>

              <Typography
                variant="body2"
                color="initial"
                sx={{ fontWeight: "medium", textTransform: "none",textAlign:"justify" }}
              >
                Poorvika is the Largest Tech Retailer in India, spanning across
                460+ showrooms in and around Tamil Nadu, Karnataka, Pondicherry,
                Mumbai, Pune and Trivandrum, famous for their touch & feel
                experience. Poorvika sells a wide category of devices in its
                showrooms and Online portal, ranging from the Best Smartphones,
                Laptops, Computers, Smart Devices, Smart TVs to Accessories.
                Poorvika's E-Commerce platform www.poorvika.com caters to
                customers across India where Customers can Comfortably Order
                their devices with just a tap and get them delivered Safely with
                delivery options such as 2 Hours Delivery, Same Day Delivery,
                Next Day Delivery, and a Pickup at the Store option based on
                their location. Having served over 5 Crore+ Happy Customers,
                Poorvika takes pride in being India's leading retailer for Top
                Brands like Apple, Samsung, Oppo, Vivo, Xiaomi, OnePlus, Redmi,
                Realme, Nokia, etc.
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        > {itemData8.map((item) => (
          <Grid xs={12} sm={10} md={1.7} key={item.img} >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Link href="" underline="none">
                <img
                  src={`${item.img}`}
                  height="40"

                  alt={item.alt_title}
                />
              </Link>

            </Item>
          </Grid>))}

        </Grid>

      </Box>
    </Box>


  );
}
export default Page;



