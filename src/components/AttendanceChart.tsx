"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 90,
    
  },
  {
    name: 'Tue',
    present: 90,
    absent: 80,
    
  },
  {
    name: 'Wed',
    present: 50,
    absent: 50,
    
  },
  {
    name: 'Thu',
    present: 80,
    absent: 20,
    
  },
  {
    name: 'Fri',
    present: 60,
    absent: 40,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
         {/* TITLE */}
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-lg font-semibold mb-2'>Attendance</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </div>
                {/* CHART */}
                <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        barSize={20}
        
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
        <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}  />
        <YAxis axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}  />
        <Tooltip />
        <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
        <Bar radius={[10, 10, 0, 0]} legendType='circle' dataKey="present" fill="#FAE27C"  />
        <Bar radius={[10, 10, 0, 0]} legendType='circle' dataKey="absent" fill="#C3EBFA"  />
      </BarChart>
    </ResponsiveContainer>
                
                    
               
                
    </div>
  )
}

export default AttendanceChart