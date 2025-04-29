import { Height } from '@mui/icons-material'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material';



export default function Line_chart({ isDash = false }) {
  const theme = useTheme();

  const data = [
    {
      "id": "japan",
      "color": "hsl(343, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 267
        },
        {
          "x": "helicopter",
          "y": 284
        },
        {
          "x": "boat",
          "y": 245
        },
        {
          "x": "train",
          "y": 203
        },
        {
          "x": "subway",
          "y": 263
        },
        {
          "x": "bus",
          "y": 139
        },
        {
          "x": "car",
          "y": 86
        },
        {
          "x": "moto",
          "y": 17
        },
        {
          "x": "bicycle",
          "y": 36
        },
        {
          "x": "horse",
          "y": 47
        },
        {
          "x": "skateboard",
          "y": 42
        },
        {
          "x": "others",
          "y": 71
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(149, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 211
        },
        {
          "x": "boat",
          "y": 270
        },
        {
          "x": "train",
          "y": 279
        },
        {
          "x": "subway",
          "y": 222
        },
        {
          "x": "bus",
          "y": 167
        },
        {
          "x": "car",
          "y": 93
        },
        {
          "x": "moto",
          "y": 248
        },
        {
          "x": "bicycle",
          "y": 159
        },
        {
          "x": "horse",
          "y": 168
        },
        {
          "x": "skateboard",
          "y": 207
        },
        {
          "x": "others",
          "y": 169
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(152, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 240
        },
        {
          "x": "helicopter",
          "y": 114
        },
        {
          "x": "boat",
          "y": 283
        },
        {
          "x": "train",
          "y": 237
        },
        {
          "x": "subway",
          "y": 188
        },
        {
          "x": "bus",
          "y": 286
        },
        {
          "x": "car",
          "y": 253
        },
        {
          "x": "moto",
          "y": 143
        },
        {
          "x": "bicycle",
          "y": 72
        },
        {
          "x": "horse",
          "y": 27
        },
        {
          "x": "skateboard",
          "y": 271
        },
        {
          "x": "others",
          "y": 3
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(253, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 190
        },
        {
          "x": "helicopter",
          "y": 207
        },
        {
          "x": "boat",
          "y": 23
        },
        {
          "x": "train",
          "y": 96
        },
        {
          "x": "subway",
          "y": 9
        },
        {
          "x": "bus",
          "y": 281
        },
        {
          "x": "car",
          "y": 299
        },
        {
          "x": "moto",
          "y": 283
        },
        {
          "x": "bicycle",
          "y": 294
        },
        {
          "x": "horse",
          "y": 143
        },
        {
          "x": "skateboard",
          "y": 15
        },
        {
          "x": "others",
          "y": 170
        }
      ]
    },
    {

      "id": "norway",
      "color": "hsl(83, 70.20%, 50.00%)",
      "data": [
        {
          "x": "plane",
          "y": 276
        },
        {
          "x": "helicopter",
          "y": 111
        },
        {
          "x": "boat",
          "y": 189
        },
        {
          "x": "train",
          "y": 184
        },
        {
          "x": "subway",
          "y": 241
        },
        {
          "x": "bus",
          "y": 43
        },
        {
          "x": "car",
          "y": 174
        },
        {
          "x": "moto",
          "y": 164
        },
        {
          "x": "bicycle",
          "y": 262
        },
        {
          "x": "horse",
          "y": 68
        },
        {
          "x": "skateboard",
          "y": 85
        },
        {
          "x": "others",
          "y": 259
        }
      ]
    }
  ]
  return (
<Box sx={{ height: isDash ? "500px" : "75vh" , 
 }}>
<ResponsiveLine
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDash ? "" : "transportation", // Correct conditional assignment
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDash ? "" : "count", // Correct conditional assignment
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </Box>
  )
}
