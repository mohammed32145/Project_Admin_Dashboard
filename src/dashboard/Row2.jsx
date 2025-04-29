import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Line_chart from './../line-chart/Line_chart';
import { Margin, Padding } from '@mui/icons-material';

export default function Row2() {
  const information = [
    { id: "01e4dsaewf", username: "alicewalker", date: "1-9-2021", amount: "43.91$" },
    { id: "02e5dsbqxg", username: "bobsmith", date: "2-9-2021", amount: "150.25$" },
    { id: "03e7dsahzv", username: "charliejohnson", date: "3-9-2021", amount: "100.50$" },
    { id: "04e8dsazkd", username: "davidjones", date: "4-9-2021", amount: "75.30$" },
    { id: "05e9dsbask", username: "emmawhite", date: "5-9-2021", amount: "212.15$" },
    { id: "06e0dsayhb", username: "frankbrown", date: "6-9-2021", amount: "98.60$" },
    { id: "07e1dsrvef", username: "gracegreen", date: "7-9-2021", amount: "300.45$" },
    { id: "08e2dsxjhs", username: "hannahlee", date: "8-9-2021", amount: "567.80$" },
    { id: "09e3dsuqwe", username: "ianblack", date: "9-9-2021", amount: "430.25$" },
    { id: "10e4dsasdt", username: "jacksonmiller", date: "10-9-2021", amount: "89.95$" },
  ]

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ width: '100%', my: 3 , flexWrap: 'wrap' , gap : '6px'}}> {/* تحديد الاتجاه أفقيًا مع مسافة بين العناصر */}
        <Paper
          sx={{
            my: '6px', // تحديد المسافة العلوية والسفلية
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            height: '600px',
            minWidth: '680px',
            flexGrow: 1
           
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ color: '#9b59b6', mb: 2 }}>
                Revenue Generated
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                $59,342.32
              </Typography>
            </Box>

            <Box>
              <Button
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              margin: 0,
              padding: 0,
              minWidth: '400px',
              height: '500px',
            }}
          >
            <Line_chart isDash={true} />
          </Box>
        </Paper>

        <Paper
          sx={{
            padding: '20px',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '600px',
            flexGrow: 1, // أخذ كامل العرض المتاح
            minWidth: '543px',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: '#9b59b6' }}>
            Recent Transactions
          </Typography>

          {information.map((transaction) => (
            <Box
              key={transaction.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                mb: 1,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
                <Typography variant="body1">{transaction.id}</Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {transaction.username}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                <Typography variant="body1">{transaction.date}</Typography>
              </Box>

              <Box sx={{ display: 'flex', width: '25%', position: 'relative' }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: '#FFA500',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    color: 'white',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {transaction.amount}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Stack> 
         </>

  );
}
