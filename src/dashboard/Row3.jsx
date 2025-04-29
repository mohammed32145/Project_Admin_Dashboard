import { Paper, Stack, Typography, useTheme } from '@mui/material'
import Pie_chart from '../profile-form/pie-chart/Pie_chart.jsx'
import React from 'react'
import Bar_chart from '../bar-chart/Bar_chart.jsx';
import GeographyChart from '../geography-chart/Geography_chart.jsx';

export default function Row3() {
      const theme = useTheme();
  return (
    <Stack gap={0.5} direction={'row'} flexWrap={'wrap'} mt={3}>
<Paper sx={{flexGrow : 1, width : '33%', minWidth : '400px'}}>
            <Typography
        variant="h3"
        align='center'
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: 600,
          mb: 1,
          mt: 2,
          

        }}
      >
        campaign
      </Typography>
<Pie_chart  isDashborad={true}/>
    <Typography
        variant="h4"
                align='center'
        sx={{
          color: theme.palette.success.main,
          fontWeight: 700,
          mb: 1,
        }}
      >
        48,352 revenue generated
      </Typography>
            <Typography
            align='center'
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontStyle: 'italic',
        }}
      >
        Includes extra misc expenditures and costs
      </Typography>

      </Paper>
<Paper  sx={{flexGrow : 1, width : '33%', minWidth : '400px' }}>
            <Typography
        variant="h3"
        align='center'
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: 600,
          mb: 1,
          mt: 2,
          

        }}
      >
        Sales Quentity
      </Typography>
<Bar_chart isDashborad={true}/>
</Paper>
<Paper sx={{flexGrow : 1, width : '33%', minWidth : '400px'}}>
<GeographyChart isDash ={true} />
</Paper>

    </Stack>

  )
}
