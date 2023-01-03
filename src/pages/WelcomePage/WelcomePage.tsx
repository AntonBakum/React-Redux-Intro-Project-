import { Box, Typography } from '@mui/material';
import { styles } from './styles';

export default function WelcomePage() {
  return (
    <Box sx={styles.welcomePageWrapper}>
      <Typography variant='h2'>This is my GlobalLogic Internship project</Typography>
    </Box>
  );
}
