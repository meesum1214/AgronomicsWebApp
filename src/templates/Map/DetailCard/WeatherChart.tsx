import { SegmentedControl, Select } from '@mantine/core';
import React, { PureComponent, useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



export default ({ data }) => {

  const [selectedIndex, setSelectedIndex] = useState('Temperature')

  const chartslines = {
    Temperature:  <Line type="monotone" dataKey="Temperature °C" stroke="red" />,
    Humidity: <Line type="monotone" dataKey="Humidity %" stroke="blue" />,
    Precipitation: <Line type="monotone" dataKey="Precipitation kg/m^2" stroke="green" />,
    Radiation: <Line type="monotone" dataKey="Radiation W/m^2" stroke="orange" />,
    'Cloud Cover': <Line type="monotone" dataKey="Cloud Cover %" stroke="purple" />,
  }

  return (
    <> 
    <div className='justify-center items-center flex content-center'>
    <SegmentedControl
    className='m-2'
      data={[
        { label: 'Temperature', value: 'Temperature' },
        { label: 'Humidity', value: 'Humidity' },
        { label: 'Precipitation', value: 'Precipitation' },
        { label: 'Radiation', value: 'Radiation' },
        { label: 'Cloud Cover', value: 'Cloud Cover' },
      ]}
      value={selectedIndex}
      onChange={setSelectedIndex}
    />
    </div>
    <div className='h-64 w-full'>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data?.map((i) => ({
            date: i.Date,
            'Humidity %': i.relative_humidity,
            'Temperature °C': i.Temp,
            'Radiation W/m^2': i.Downward_shortwave_radiation_flux,
            precipitable_water_entire_atmosphere: i.precipitable_water_entire_atmosphere,
            specific_humidity2: i.specific_humidity2,
            'Cloud Cover %': i.cloud_cover,
            'Precipitation kg/m^2': i.total_precipitation_surface,
            u_component_of_wind: i.u_component_of_wind,
            v_component_of_wind: i.v_component_of_wind,

          }))}

          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: -15,
          }}

        >
          <CartesianGrid stroke="#f5f5f5" vertical={false}/>
          <XAxis dataKey="date" scale="band" tick={{
            fontSize: 8,
            angle: -45,
            textAnchor: 'end',
          }} />
          <YAxis tick={{
            fontSize: 10,
            min: -1,
            max: 1,
          }} />
          <Tooltip />
          <Legend />



         {chartslines[selectedIndex]}

        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}

