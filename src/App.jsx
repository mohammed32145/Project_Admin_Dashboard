import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './Components/TopBar';
import Sidebar from './Components/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';


export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = React.useState(storedTheme);



  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  // دالة لتبديل الثيم بين light و dark
  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // إنشاء الثيم بناءً على الوضع الحالي
  const darkTheme = createTheme({
    palette: {
      mode: themeMode,  // تحديد الوضع بين light و dark
    },
    breakpoints: {
      values: {
        xs: 0,  // الهواتف الصغيرة
        sm: 400, // الأجهزة اللوحية الصغيرة
        md: 900, // الأجهزة اللوحية الأكبر
        lg: 1300, // الشاشات الكبيرة
        xl: 1301, // الشاشات الكبيرة جدًا
      },
    },
  });

  const handleDrawerOpen = () => {
    setOpen(prevOpen => !prevOpen); // التبديل بين true و false
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} darkTheme={darkTheme} toggleTheme={toggleTheme}   />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} DrawerHeader={DrawerHeader} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
         <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
