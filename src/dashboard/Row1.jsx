import React from 'react';
import { Paper, Box, Typography, useTheme  } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';  // تأكد من استيراد ResponsivePie بشكل صحيح

export default function Row1({ icon: Icon, num, text, numChart  ,data,scheme}) {
    const theme = useTheme();
  
  

  return (
<Paper sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '280px', flexGrow : '1'   }}> 
{/* الجزء الأول: أيقونة + رقم + نص */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Icon sx={{ marginBottom: 1 , color : "#ff00ae"}} /> {/* هنا Icon هو مكون React وليس عنصر JSX */}
        <Typography variant="h6" sx={{ marginBottom: 1 }}>{num}</Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>

      {/* الجزء الثاني: عرض المخطط دائمًا */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px', height: '100px' }}>
        {/* عرض المخطط دائما */}
        <ResponsivePie
          data={data}
          theme={{
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "axis": {
              "domain": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                }
              },
              "legend": {
                "text": {
                  "fontSize": 12,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              },
              "ticks": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                },
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              }
            },
            "grid": {
              "line": {
                "stroke": "#dddddd",
                "strokeWidth": 1
              }
            },
            "legends": {
              "title": {
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              },
              "ticks": {
                "line": {},
                "text": {
                  "fontSize": 10,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
                }
              }
            },
            "annotations": {
              "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": theme.palette.background.paper,
                "outlineOpacity": 1
              },
              "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": theme.palette.background.paper,
                "outlineOpacity": 1
              },
              "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": theme.palette.background.paper,
                "outlineOpacity": 1
              },
              "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": theme.palette.background.paper,
                "outlineOpacity": 1
              }
            },
            "tooltip": {
              "wrapper": {},
              "container": {
                "background": theme.palette.background.paper,
                "color": theme.palette.text.primary,
                "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
            }
          }}
          margin={{ top: 0, right: 80, bottom: 10, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme }} 
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                0.2
              ]
            ]
          }}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          enableArcLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                2
              ]
            ]
          }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
  
        />

<Typography sx={{ position: 'relative', bottom: '20px' }} variant="h6">
  {numChart}
</Typography>
      </Box>
    </Paper>
  );
}
