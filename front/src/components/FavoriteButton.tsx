import { Button } from '@mui/material';

import { styled } from '@mui/material/styles';

const FavoriteButton = styled(Button)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 500,
  paddingLeft: 13,
  paddingRight: 13,
  paddingTop: 8,
  paddingBottom: 8,
  color: '#7165E3',
  textTransform: 'none',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#7165E3',
  },
}));

export default FavoriteButton;
