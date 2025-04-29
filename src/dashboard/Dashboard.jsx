import React from 'react';
import Input from './Input';
import Row2 from './Row2';
import Row3 from './Row3';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // استيراد الأيقونة
import TrafficIcon from '@mui/icons-material/Traffic'; // استيراد الأيقونة
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // استيراد الأيقونة
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // استيراد الأيقونة
import Row1 from './Row1';
import { Stack } from '@mui/material';

export default function Dashboard() {
  const data1 = [
    {
      "id": "erlang",
      "label": "erlang",
      "value": 418,
      "color": "hsl(4, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 200,
      "color": "hsl(189, 70%, 50%)"
    },
  ];

  const data2 = [
    {
      "id": "python",
      "label": "python",
      "value": 300,
      "color": "hsl(120, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 150,
      "color": "hsl(330, 70%, 50%)"
    }
  ];

  const data3 = [
    {
      "id": "javascript",
      "label": "javascript",
      "value": 250,
      "color": "hsl(60, 70%, 50%)"
    },
    {
      "id": "typescript",
      "label": "typescript",
      "value": 220,
      "color": "hsl(180, 70%, 50%)"
    }
  ];

  const data4 = [
    {
      "id": "csharp",
      "label": "csharp",
      "value": 180,
      "color": "hsl(240, 70%, 50%)"
    },
    {
      "id": "swift",
      "label": "swift",
      "value": 130,
      "color": "hsl(150, 70%, 50%)"
    }
  ];

  return (
    <>
      <Input />
      <Stack
        direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4px', width: '100%' }} >
        <Row1 icon={MailOutlineIcon} num={12360} text="Email Send" data={data1} numChart="+14%" scheme={"nivo"} />
        <Row1 icon={AttachMoneyIcon} num={12360} text="Sales Obtained" data={data2} numChart="+21%" scheme={"category10"} />
        <Row1 icon={PersonAddIcon} num={12360} text="New Clients" data={data3} numChart="+5%" scheme={"paired"} />
        <Row1 icon={TrafficIcon} num={12360} text="Traffic Received" data={data4} numChart="+43%" scheme={"set1"} />
      </Stack>
      <Row2 />
      <Row3 />
    </>
  );
}
