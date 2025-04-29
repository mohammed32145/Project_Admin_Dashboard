import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f6f8"
      textAlign="center"
      px={2}
    >
      <Typography variant="h1" color="primary" fontWeight="bold" fontSize={{ xs: 80, sm: 150 }}>
        404
      </Typography>
      <Typography variant="h5" mb={2}>
        الصفحة غير موجودة 😕
      </Typography>
      <Typography variant="body1" mb={4}>
        يبدو أنك تحاول الوصول إلى صفحة غير متوفرة. ربما تم نقلها أو لم تعد موجودة.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ textTransform: 'none', px: 4, py: 1 }}
      >
        العودة إلى الصفحة الرئيسية
      </Button>
    </Box>
  );
}
