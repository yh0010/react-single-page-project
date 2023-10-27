import React from 'react';
import { Typography, CssBaseline, Card, CardActions, CardContent,  Grid, Button, Container, Divider, Popover, IconButton, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledContainer, ReviewButton, StyledCardMedia, PopoverContent } from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const cards = [
    {
      orderDetails: {
        orderPlaced: 'October 20, 2023',
        total: '$90.00',
        shipTo: 'JJ Lin',
        orderNumber: 'ORDER #23',
        address: '6666 Harwin Drive, Houston, TX 77006'
      },
      products: [
        {
          name: 'iPhone 14 Back Glass',
          quantity: '2',
          total: '$30.0',
        },
        {
          name: 'iPad Pro 999',
          quantity: '3',
          total: '10.0',
        },
      ],
    },
    {
        orderDetails: {
          orderPlaced: 'October 19, 2023',
          total: '$1395.00',
          shipTo: 'Joe Zhou',
          orderNumber: 'ORDER #22',
          address: '34532 Gamble Road APT 503, San Benito TX 78586'
        },
        products: [
          {
            name: 'iPad Pro 11 3 gen',
            quantity: '9',
            total: '$155.0',
          },
        ],
      },
  ];

  

const App = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openPopover = Boolean(anchorEl);
    
    const [activeCard, setActiveCard] = React.useState(null);

    const handleOpenPopover = (event, card) => {
        setActiveCard(card);
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
        setActiveCard(null); // Reset after closing
    };

    const addressParts = activeCard 
    ? [
        activeCard.orderDetails.address.split(',')[0], 
        activeCard.orderDetails.address.split(',').slice(1).join(',')
      ] 
    : ['', ''];
    
    const matches = useMediaQuery('(max-width:767px)');

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <main>
                    <StyledContainer>
                    <Container maxWidth="lg">
                        {cards.map((card) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={card.orderDetails.orderNumber}>            
                            <Card variant="outlined" sx={{ marginBottom: 2, backgroundColor: 'grey.200' }}>
                            <CardContent sx={matches ? { padding: '8px' } : {}}>
                                <Grid container spacing={matches ? 1 : 3} justifyContent="space-between">  
                                    <Grid item xs={12} md={2}>
                                        <Typography>ORDER PLACED</Typography>
                                        <Typography>{card.orderDetails.orderPlaced}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Typography>TOTAL</Typography>
                                        <Typography>{card.orderDetails.total}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Typography>SHIP TO</Typography>
                                        <div onClick={(e) => handleOpenPopover(e, card)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                            <Typography>{card.orderDetails.shipTo}</Typography>
                                            <IconButton size="small" color="primary" style={{ padding: 0 }}>
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                        </div>
                                        <Popover
                                            open={openPopover}
                                            anchorEl={anchorEl}
                                            onClose={handleClosePopover}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <PopoverContent>
                                                <Typography variant="body1" component="div" fontWeight="bold">
                                                    {activeCard ? activeCard.orderDetails.shipTo : ''}
                                                </Typography>
                                                <Typography variant="body2" component="div">
                                                    {addressParts[0]}
                                                    <br />
                                                    {addressParts[1]}
                                                </Typography>
                                            </PopoverContent>
                                        </Popover>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Typography>{card.orderDetails.orderNumber}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="flex-end">
                                            <Grid item>
                                                <Button size="small" color="primary">View Order Details</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>

                            <Divider variant="middle" />

                            {card.products.map((product, index) => (
                                <Card key={product.name + index}>
                                    <CardContent>
                                        <Grid container spacing={2} alignItems="center">
                                            {/* Grid for the image */}
                                            <Grid item xs={3}>
                                                <div style={{ position: 'relative', paddingTop: '100%' }}> {/* This container has 1:1 aspect ratio */}
                                                    <StyledCardMedia 
                                                        component="img"
                                                        alt="Product Image"
                                                        image="https://i.postimg.cc/v8hLHbtX/product.jpg"
                                                    />
                                                </div>
                                            </Grid>

                                            {/* Grid for the product details */}
                                            <Grid item xs={9}>
                                                <Typography variant="h5">{product.name}</Typography>
                                                <Typography variant="body2">Quantity: {product.quantity}</Typography>
                                                <Typography variant="body2">Total: {product.total}</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container justifyContent="flex-end">
                                        <ReviewButton size="small" variant="outlined">
                                            Write a product review
                                        </ReviewButton>                   
                                        </Grid>
                                    </CardActions>
                                </Card>
                            ))}


                            </Card>
                            </Grid>
                        ))}
                        </Container>
                    </StyledContainer>
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;