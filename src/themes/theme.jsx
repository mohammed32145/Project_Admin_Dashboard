import { createTheme } from '@mui/material/styles';

// إنشاء theme مخصص
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,  // الهواتف الصغيرة
      sm: 600, // الأجهزة اللوحية الصغيرة
      md: 900, // الأجهزة اللوحية الأكبر
      lg: 1200, // الشاشات الكبيرة
      xl: 1536, // الشاشات الكبيرة جدًا
    },
  },
  // يمكنك تخصيص المزيد من الإعدادات هنا مثل الألوان والطباعة
});

// استخدام theme في التطبيق
export default theme;
