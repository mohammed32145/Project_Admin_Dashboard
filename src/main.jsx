import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // تأكد من استخدام createRoot من react-dom/client
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Manage_team from './manage-team/Manage_team';
import Contacts_info from './contacts-info/Contacts_info';
import Invoices_balances from './invoices-balances/Invoices_balances';
import Profile_form from './profile-form/Profile_form';
import Calendar from './calendar/Calendar';
import Faq from './faq/Faq';
import Bar_chart from './bar-chart/Bar_chart';
import Pie_chart from './profile-form/pie-chart/Pie_chart';
import Line_chart from './line-chart/Line_chart';
import Geography_chart from './geography-chart/Geography_chart';
import NotFound from './notfound/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="manage-team" element={<Manage_team />} />
      <Route path="contacts-info" element={<Contacts_info />} />
      <Route path="invoices-balances" element={<Invoices_balances />} />
      <Route path="profile-form" element={<Profile_form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar-chart" element={<Bar_chart />} />
      <Route path="pie-chart" element={<Pie_chart/>} />
      <Route path="line-chart" element={<Line_chart/>} />
      <Route path="geography-chart" element={<Geography_chart/>} />
            <Route path="*" element={<NotFound/>} />










      {/* يمكنك إضافة المزيد من الـ Routes هنا */}
    </Route>
  )
);

// استخدام createRoot بدلاً من ReactDOM.createRoot
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
