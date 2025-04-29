import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MapIcon from '@mui/icons-material/Map';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Avatar, IconButton, Tooltip, Typography, useTheme, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import img from '../assets/MY_PICTURE.png'; // تأكد من وجود الصورة

const drawerWidth = 240; // العرض الكامل للـ Drawer عند الفتح
const closedDrawerWidth = 60; // العرض عند غلق الـ Drawer (عرض الأيقونات فقط)

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  width: closedDrawerWidth, // عرض الأيقونات فقط عند غلق الـ Drawer
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: open ? drawerWidth : closedDrawerWidth, // ضبط العرض وفقًا لحالة الفتح
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      ...((open && openedMixin(theme)) || closedMixin(theme)),
    },
  })
);

export default function Sidebar({ open, DrawerHeader, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const mainItems = [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/' },
    { text: 'Manage Team', icon: <GroupIcon />, path: '/manage-team' },
    { text: 'Contacts Information', icon: <ContactsIcon />, path: '/contacts-info' },
    { text: 'Invoices Balances', icon: <ReceiptIcon />, path: '/invoices-balances' },
  ];

  const additionalItems = [
    { text: 'Profile form', icon: <PersonIcon />, path: '/profile-form' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'FAQ Page', icon: <HelpOutlineIcon />, path: '/faq' },
  ];

  const chartItems = [
    { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar-chart' },
    { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie-chart' },
    { text: 'Line Chart', icon: <ShowChartIcon />, path: '/line-chart' },
    { text: 'Geography Chart', icon: <MapIcon />, path: '/geography-chart' },
  ];

  const renderList = (items) =>
    items.map((item) => {
      const listItem = (
        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.mode === 'light'
                    ? grey[400]
                    : grey[800]
                  : '',
              '&:hover': {
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode === 'light'
                      ? grey[400]
                      : grey[800]
                    : theme.palette.mode === 'light'
                    ? grey[200]
                    : grey[600],
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, transition: 'opacity 0.3s' }} />
          </ListItemButton>
        </ListItem>
      );

      return open ? listItem : (
        <Tooltip key={item.text} title={item.text} placement="right">
          {listItem}
        </Tooltip>
      );
    });

  return (
    <Drawer variant="permanent" open={open}>
      {DrawerHeader && <DrawerHeader />}
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ mx: 'auto' }}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Box display="flex" flexDirection="column" alignItems="center" mt={1} mb={2}>
        <Avatar
          src={img}
          sx={{
            width: open ? 80 : 40,
            height: open ? 80 : 40,
            transition: 'all 0.3s ease',
          }}
        />
        {open && (
          <>
            <Typography variant="h6" sx={{ fontSize: '1rem', mt: 1 }}>
              Mohammed Abu Ramadan
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: '0.9rem', color: theme.palette.info.main }}
            >
              Admin
            </Typography>
          </>
        )}
      </Box>

      <List>{renderList(mainItems)}</List>
      <Divider />
      <List>{renderList(additionalItems)}</List>
      <Divider />
      <List>{renderList(chartItems)}</List>
    </Drawer>
  );
}
