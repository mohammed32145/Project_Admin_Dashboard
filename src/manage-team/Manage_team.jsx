import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@emotion/react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const rows = [
  { id: 1, name: 'Ahmed', email: 'ahmed@example.com', age: 25, phone: '123-456-7890', access: 'Admin' },
  { id: 2, name: 'Sara', email: 'sara@example.com', age: 30, phone: '987-654-3210', access: 'User' },
  { id: 3, name: 'Mona', email: 'mona@example.com', age: 28, phone: '555-555-5555', access: 'Moderator' },
  { id: 4, name: 'Ali', email: 'ali@example.com', age: 35, phone: '321-654-9870', access: 'User' },
  { id: 5, name: 'Yasmin', email: 'yasmin@example.com', age: 22, phone: '444-555-6666', access: 'Admin' },
  { id: 6, name: 'Omar', email: 'omar@example.com', age: 40, phone: '777-888-9999', access: 'Moderator' },
];

const columns = [
  { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'name', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'email', headerName: 'Email', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'age', headerName: 'Age', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'phone', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center' },
  {
    field: 'access',
    headerName: 'Access',
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => {
      const { access } = params.row;
      const theme = useTheme(); // استخدام الـ theme
      let cellColor = '';
      let icon = null;

      // تغيير اللون والأيقونة بناءً على القيمة
      if (access === 'Admin') {
        cellColor = theme.palette.primary.dark;
        icon = <AdminPanelSettingsIcon style={{ marginRight: '5px' }} />;
      } else if (access === 'User') {
        cellColor = theme.palette.warning.main;
        icon = <AccountCircleIcon style={{ marginRight: '5px' }} />;
      } else if (access === 'Moderator') {
        cellColor = theme.palette.info.main;
        icon = <SupervisedUserCircleIcon style={{ marginRight: '5px' }} />;
      }

      return (
        <div
          style={{
            backgroundColor: cellColor,
            color: 'white',
            padding: '3px 10px',
            borderRadius: '4px',
            width: '50%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          {icon}
          {access}
        </div>
      );
    },
  },
];

export default function Manage_team() {
  const theme = useTheme();
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
