import { Box, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';

// تأكد من استيراد الخريطة الجغرافية المناسبة
import { geo } from './worldGeoData';

export default function GeographyChart({isDash = false }) {
  const theme = useTheme();

  const data = [
    {
      "id": "AFG",
      "value": 546852
    },
    {
      "id": "AGO",
      "value": 499399
    },
    {
      "id": "ALB",
      "value": 927199
    },
    {
      "id": "ARE",
      "value": 533663
    },
    {
      "id": "ARG",
      "value": 801287
    },
    {
      "id": "ARM",
      "value": 235205
    },
    {
      "id": "ATA",
      "value": 949003
    },
    {
      "id": "ATF",
      "value": 18935
    },
    {
      "id": "AUT",
      "value": 424280
    },
    {
      "id": "AZE",
      "value": 294364
    },
    {
      "id": "BDI",
      "value": 920466
    },
    {
      "id": "BEL",
      "value": 360496
    },
    {
      "id": "BEN",
      "value": 45870
    },
    {
      "id": "BFA",
      "value": 635574
    },
    {
      "id": "BGD",
      "value": 18222
    },
    {
      "id": "BGR",
      "value": 888459
    },
    {
      "id": "BHS",
      "value": 912120
    },
    {
      "id": "BIH",
      "value": 112381
    },
    {
      "id": "BLR",
      "value": 321478
    },
    {
      "id": "BLZ",
      "value": 142024
    },
    {
      "id": "BOL",
      "value": 135704
    },
    {
      "id": "BRN",
      "value": 636122
    },
    {
      "id": "BTN",
      "value": 221428
    },
    {
      "id": "BWA",
      "value": 761806
    },
    {
      "id": "CAF",
      "value": 794834
    },
    {
      "id": "CAN",
      "value": 213597
    },
    {
      "id": "CHE",
      "value": 629097
    },
    {
      "id": "CHL",
      "value": 693432
    },
    {
      "id": "CHN",
      "value": 831744
    },
    {
      "id": "CIV",
      "value": 399645
    },
    {
      "id": "CMR",
      "value": 872029
    },
    {
      "id": "COG",
      "value": 23111
    },
    {
      "id": "COL",
      "value": 777573
    },
    {
      "id": "CRI",
      "value": 895352
    },
    {
      "id": "CUB",
      "value": 163121
    },
    {
      "id": "-99",
      "value": 779660
    },
    {
      "id": "CYP",
      "value": 856560
    },
    {
      "id": "CZE",
      "value": 306098
    },
    {
      "id": "DEU",
      "value": 639716
    },
    {
      "id": "DJI",
      "value": 551885
    },
    {
      "id": "DNK",
      "value": 269931
    },
    {
      "id": "DOM",
      "value": 821846
    },
    {
      "id": "DZA",
      "value": 222907
    },
    {
      "id": "ECU",
      "value": 369156
    },
    {
      "id": "EGY",
      "value": 134572
    },
    {
      "id": "ERI",
      "value": 899373
    },
    {
      "id": "ESP",
      "value": 474774
    },
    {
      "id": "EST",
      "value": 625254
    },
    {
      "id": "ETH",
      "value": 879833
    },
    {
      "id": "FIN",
      "value": 307187
    },
    {
      "id": "FJI",
      "value": 550010
    },
    {
      "id": "FLK",
      "value": 468771
    },
    {
      "id": "FRA",
      "value": 40900
    },
    {
      "id": "GAB",
      "value": 144772
    },
    {
      "id": "GBR",
      "value": 376531
    },
    {
      "id": "GEO",
      "value": 440692
    },
    {
      "id": "GHA",
      "value": 317659
    },
    {
      "id": "GIN",
      "value": 854859
    },
    {
      "id": "GMB",
      "value": 462032
    },
    {
      "id": "GNB",
      "value": 680479
    },
    {
      "id": "GNQ",
      "value": 832116
    },
    {
      "id": "GRC",
      "value": 54589
    },
    {
      "id": "GTM",
      "value": 827733
    },
    {
      "id": "GUY",
      "value": 355158
    },
    {
      "id": "HND",
      "value": 487911
    },
    {
      "id": "HRV",
      "value": 325406
    },
    {
      "id": "HTI",
      "value": 602893
    },
    {
      "id": "HUN",
      "value": 101445
    },
    {
      "id": "IDN",
      "value": 620539
    },
    {
      "id": "IND",
      "value": 680901
    },
    {
      "id": "IRL",
      "value": 160753
    },
    {
      "id": "IRN",
      "value": 724396
    },
    {
      "id": "IRQ",
      "value": 288395
    },
    {
      "id": "ISL",
      "value": 542787
    },
    {
      "id": "ISR",
      "value": 92370
    },
    {
      "id": "ITA",
      "value": 848538
    },
    {
      "id": "JAM",
      "value": 406901
    },
    {
      "id": "JOR",
      "value": 491687
    },
    {
      "id": "JPN",
      "value": 195290
    },
    {
      "id": "KAZ",
      "value": 734435
    },
    {
      "id": "KEN",
      "value": 945707
    },
    {
      "id": "KGZ",
      "value": 638450
    },
    {
      "id": "KHM",
      "value": 848593
    },
    {
      "id": "OSA",
      "value": 925727
    },
    {
      "id": "KWT",
      "value": 709893
    },
    {
      "id": "LAO",
      "value": 71802
    },
    {
      "id": "LBN",
      "value": 969890
    },
    {
      "id": "LBR",
      "value": 629478
    },
    {
      "id": "LBY",
      "value": 937716
    },
    {
      "id": "LKA",
      "value": 902077
    },
    {
      "id": "LSO",
      "value": 864502
    },
    {
      "id": "LTU",
      "value": 517136
    },
    {
      "id": "LUX",
      "value": 40350
    },
    {
      "id": "LVA",
      "value": 527123
    },
    {
      "id": "MAR",
      "value": 973202
    },
    {
      "id": "MDA",
      "value": 523591
    },
    {
      "id": "MDG",
      "value": 588833
    },
    {
      "id": "MEX",
      "value": 409682
    },
    {
      "id": "MKD",
      "value": 439314
    },
    {
      "id": "MLI",
      "value": 598009
    },
    {
      "id": "MMR",
      "value": 370401
    },
    {
      "id": "MNE",
      "value": 207129
    },
    {
      "id": "MNG",
      "value": 839431
    },
    {
      "id": "MOZ",
      "value": 38790
    },
    {
      "id": "MRT",
      "value": 693627
    },
    {
      "id": "MWI",
      "value": 201576
    },
    {
      "id": "MYS",
      "value": 836658
    },
    {
      "id": "NAM",
      "value": 275578
    },
    {
      "id": "NCL",
      "value": 301607
    },
    {
      "id": "NER",
      "value": 672451
    },
    {
      "id": "NGA",
      "value": 66243
    },
    {
      "id": "NIC",
      "value": 321896
    },
    {
      "id": "NLD",
      "value": 188515
    },
    {
      "id": "NOR",
      "value": 850951
    },
    {
      "id": "NPL",
      "value": 335312
    },
    {
      "id": "NZL",
      "value": 114459
    },
    {
      "id": "OMN",
      "value": 801910
    },
    {
      "id": "PAK",
      "value": 853270
    },
    {
      "id": "PAN",
      "value": 112822
    },
    {
      "id": "PER",
      "value": 485038
    },
    {
      "id": "PHL",
      "value": 898325
    },
    {
      "id": "PNG",
      "value": 122577
    },
    {
      "id": "POL",
      "value": 817603
    },
    {
      "id": "PRI",
      "value": 791829
    },
    {
      "id": "PRT",
      "value": 702370
    },
    {
      "id": "PRY",
      "value": 104809
    },
    {
      "id": "QAT",
      "value": 166875
    },
    {
      "id": "ROU",
      "value": 175394
    },
    {
      "id": "RUS",
      "value": 810333
    },
    {
      "id": "RWA",
      "value": 808757
    },
    {
      "id": "ESH",
      "value": 31782
    },
    {
      "id": "SAU",
      "value": 927636
    },
    {
      "id": "SDN",
      "value": 117925
    },
    {
      "id": "SDS",
      "value": 373924
    },
    {
      "id": "SEN",
      "value": 943739
    },
    {
      "id": "SLB",
      "value": 216848
    },
    {
      "id": "SLE",
      "value": 173684
    },
    {
      "id": "SLV",
      "value": 939483
    },
    {
      "id": "ABV",
      "value": 202561
    },
    {
      "id": "SOM",
      "value": 25732
    },
    {
      "id": "SRB",
      "value": 702982
    },
    {
      "id": "SUR",
      "value": 178137
    },
    {
      "id": "SVK",
      "value": 327815
    },
    {
      "id": "SVN",
      "value": 138385
    },
    {
      "id": "SWZ",
      "value": 790211
    },
    {
      "id": "SYR",
      "value": 975377
    },
    {
      "id": "TCD",
      "value": 492896
    },
    {
      "id": "TGO",
      "value": 237817
    },
    {
      "id": "THA",
      "value": 810455
    },
    {
      "id": "TJK",
      "value": 11616
    },
    {
      "id": "TKM",
      "value": 93533
    },
    {
      "id": "TLS",
      "value": 534509
    },
    {
      "id": "TTO",
      "value": 182364
    },
    {
      "id": "TUN",
      "value": 582026
    },
    {
      "id": "TUR",
      "value": 624517
    },
    {
      "id": "TWN",
      "value": 644474
    },
    {
      "id": "TZA",
      "value": 281400
    },
    {
      "id": "UGA",
      "value": 934525
    },
    {
      "id": "UKR",
      "value": 125870
    },
    {
      "id": "URY",
      "value": 142438
    },
    {
      "id": "USA",
      "value": 933808
    },
    {
      "id": "UZB",
      "value": 443659
    },
    {
      "id": "VEN",
      "value": 500495
    },
    {
      "id": "VNM",
      "value": 227239
    },
    {
      "id": "VUT",
      "value": 594477
    },
    {
      "id": "PSE",
      "value": 657486
    },
    {
      "id": "YEM",
      "value": 520670
    },
    {
      "id": "ZAF",
      "value": 116140
    },
    {
      "id": "ZMB",
      "value": 978901
    },
    {
      "id": "ZWE",
      "value": 921721
    },
    {
      "id": "KOR",
      "value": 703980
    }
  ]

  return (
<Box 
  sx={{ 
    height: isDash ? "500px" : "75vh" , 
    border: `1px solid ${theme.palette.text.primary}`  // استخدام الصيغة الصحيحة للإطار
  }}
>      <ResponsiveChoropleth
      
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
        }}        features={geo.features}  // تأكد من أن هذه البيانات الجغرافية في ملف geojson
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="RdYlBu"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          },
          {
            id: 'gradient',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: '#000' },
              { offset: 100, color: 'inherit' }
            ]
          }
        ]}
        fill={[
          { match: { id: 'CAN' }, id: 'dots' },
          { match: { id: 'CHN' }, id: 'lines' },
          { match: { id: 'ATA' }, id: 'gradient' }
        ]}
  legends={
    isDash ? [] : [
      {
        anchor: 'bottom-left',
        direction: 'column',
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: 'left-to-right',
        itemTextColor: theme.palette.text.primary,
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: theme.palette.text.primary,
              itemOpacity: 1
            }
          }
        ]
      }
    ]
  }
/>    </Box>
  );
}
