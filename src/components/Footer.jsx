import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">
      Developed by Recep Demir
      </Typography>
      <Typography variant="body1">
        All rights reserved 2025
      </Typography>
    </Box>
  );
}

export default Footer;
