import React from 'react';
import { Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function Input() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
      >
        Download Reports
      </Button>
    </Box>
  );
}
