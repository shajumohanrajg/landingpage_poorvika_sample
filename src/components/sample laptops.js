   <Grid
        container

        columns={{ xs: 12, sm: 12, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

        <Grid xs={12} sm={12} md={12} >
         
          <div className="carousel-wrapper">
            <Carousel1 breakPoints={breakPoints}>
              {itemData15.map((item) => (
                <Item sx={{ backgroundColor: '#ECE0E4', boxshadow: 'none', border: 'none', padding: 'none' }} key={item.img}> <img
                  src={`${item.img}`}


                  alt={item.alt_title}
                /></Item>))}

            </Carousel1>
          </div></Grid> </Grid>const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


{itemData.map((item) => (
  <Grid xs={2} sm={2} md={1.3} key={item.img}>
    <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
      <Link href="" underline="none">
        <img
          src={`${item.img}`}

          height="150"
          alt={item.alt_title}
        />
      </Link>
    </Item>
  </Grid>
))}

{itemData.map((item) => (
  <Grid xs={2} sm={2} md={2} key={item.img} >
<Item sx={{ boxShadow: "none", backgroundColor: "transparent",border:'none' }}>
  <Card sx={{ }}>
<CardMedia
sx={{ height:140}}
image={`${item.img}`}
title={item.alt_title}
>   
</CardMedia>
<CardContent sx={{backgroundColor:'black',color:'whitesmoke'}}>
<Typography  variant="button" sx={{textTransform:'none'}} component="div">
{item.title}
</Typography>

</CardContent>

</Card></Item></Grid> ))}