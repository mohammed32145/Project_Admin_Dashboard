import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getGridNumericOperators } from '@mui/x-data-grid';

// تعريف عوامل التصفية المخصصة
// const numericFilterOperators = getGridNumericOperators().filter(
//   (operator) => operator.value === '<' || operator.value === '>' || operator.value === '='
// );

export default function Contacts_info() {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 2,
      minWidth: 200,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      type: 'number', // تحديد نوع العمود كرقم
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 2,
      minWidth: 250,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'zipcode',
      headerName: 'Zipcode',
      flex: 1,
      minWidth: 130,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center'
    },
  ];

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, phone: '123-456-7890', address: '123 Main St', city: 'New York', zipcode: '10001', registrarId: 'R12345' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34, phone: '987-654-3210', address: '456 Oak Ave', city: 'Los Angeles', zipcode: '90001', registrarId: 'R12346' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 26, phone: '555-123-4567', address: '789 Pine Rd', city: 'Chicago', zipcode: '60601', registrarId: 'R12347' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', age: 40, phone: '555-765-4321', address: '101 Maple Ln', city: 'San Francisco', zipcode: '94101', registrarId: 'R12348' },
    { id: 5, name: 'Charlie White', email: 'charlie@example.com', age: 29, phone: '555-234-5678', address: '202 Birch Blvd', city: 'Seattle', zipcode: '98101', registrarId: 'R12349' },
    { id: 6, name: 'David Green', email: 'david@example.com', age: 37, phone: '555-876-5432', address: '303 Cedar Dr', city: 'Boston', zipcode: '02101', registrarId: 'R12350' },
    { id: 7, name: 'Eva Black', email: 'eva@example.com', age: 33, phone: '555-987-6543', address: '404 Willow Way', city: 'Miami', zipcode: '33101', registrarId: 'R12351' },
    { id: 8, name: 'Frank Blue', email: 'frank@example.com', age: 45, phone: '555-654-3210', address: '505 Elm St', city: 'Houston', zipcode: '77001', registrarId: 'R12352' },
    { id: 9, name: 'Grace Yellow', email: 'grace@example.com', age: 27, phone: '555-321-7654', address: '606 Redwood Dr', city: 'Denver', zipcode: '80201', registrarId: 'R12353' },
    { id: 10, name: 'Hank Red', email: 'hank@example.com', age: 50, phone: '555-432-1098', address: '707 Fir Rd', city: 'Phoenix', zipcode: '85001', registrarId: 'R12354' },
  ];

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ height: '80%', width: '100%' }}>
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
            sx={{
              '& .center': {
                textAlign: 'center',
              },
              '& .MuiDataGrid-columnHeader': {
                textAlign: 'center',
              }
            }}
          />
        </div>
      </div>
    </>
  );
}