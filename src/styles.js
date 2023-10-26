import { styled } from '@mui/system';
import { Container, CardMedia, Button } from '@mui/material';


export const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
}));

export const StyledCardMedia = styled(CardMedia)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
});

export const ReviewButton = styled(Button)(({ theme }) => ({
    borderRadius: '25px',
    borderColor: 'gray',
    color: theme.palette.grey[600],
    backgroundColor: 'white',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)', // adjust shadow to your preference
    '&:hover': {
        backgroundColor: 'white', // keeping the hover color consistent
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // adjust hover shadow if necessary
    }
}));

export const PopoverContent = styled('div')`
    padding: 16px;
`;



export default StyledContainer;
