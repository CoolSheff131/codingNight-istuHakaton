import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  marginTop: 14,
  marginRight: 14,
  fontSize: 18,
  paddingLeft: 13,
  paddingRight: 13,
  paddingTop: 8,
  paddingBottom: 8,
  color: '#7165E3',
  textTransform: 'none',
  backgroundColor: '#E8E6FF',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#7165E3',
  },
}));

export default ColorButton;
