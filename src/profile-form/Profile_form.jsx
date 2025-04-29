import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

export default function ProfileForm() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const currencies = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'User',
      label: 'User',
    },
  ];

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    contactNumber: yup.string().required('Contact number is required'),
    address1: yup.string().required('Address 1 is required'),
    address2: yup.string().required('Address 2 is required'),
    role: yup.string().required('Role is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      address1: '',
      address2: '',
      role: 'User',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      toast(`Successfully Registered ${values.role} 😀`, {
        position: "top-center",  // مكان الإشعار
        autoClose: 5000,         // مدة بقاء الإشعار (بالمللي ثانية)
        hideProgressBar: true,   // إخفاء شريط التقدم
        closeOnClick: true,      // إغلاق الإشعار عند النقر عليه
        pauseOnHover: true,      // إيقاف العد التنازلي عند التمرير عليه
        draggable: true,         // تمكين سحب الإشعار
        progress: undefined,
        style: {
          backgroundColor: '#4CAF50',  // لون الخلفية أخضر
          color: 'white',              // النص باللون الأبيض
          fontSize: '16px',            // حجم الخط
          borderRadius: '8px',         // حواف دائرية
          padding: '12px 20px',        // مساحة داخلية
        },
      });
    }, // نهاية onSubmit

  });

  return (
    <>
      <ToastContainer />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Stack sx={{ width: '100%' }} gap={2} direction="row">
          <TextField
            sx={{ flex: 1 }}
            id="firstName"
            label="First Name"
            variant="filled"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            sx={{ flex: 1 }}
            id="lastName"
            label="Last Name"
            variant="filled"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Stack>

        <TextField
          id="email"
          label="Email"
          variant="filled"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          id="contactNumber"
          label="Contact Number"
          variant="filled"
          name="contactNumber"
          value={formik.values.contactNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
          helperText={formik.touched.contactNumber && formik.errors.contactNumber}
        />

        <TextField
          id="address1"
          label="Address 1"
          variant="filled"
          name="address1"
          value={formik.values.address1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address1 && Boolean(formik.errors.address1)}
          helperText={formik.touched.address1 && formik.errors.address1}
        />

        <TextField
          id="address2"
          label="Address 2"
          variant="filled"
          name="address2"
          value={formik.values.address2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address2 && Boolean(formik.errors.address2)}
          helperText={formik.touched.address2 && formik.errors.address2}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          variant="filled"
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            style={{ textTransform: 'capitalize' }}
          >
            Create New User
          </Button>
        </div>
      </Box>
    </>
  );
}
