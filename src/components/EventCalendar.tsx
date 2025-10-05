"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  { id: 1, 
    title: 'Event 1',
    time: '10:00 AM - 11:00 AM',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  { id: 2,
    title: 'Event 2',
    time: '12:00 PM - 1:00 PM',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 },
  { id: 3, 
    title: 'Event 1',
    time: '10:00 AM - 11:00 AM', 
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
 },
  
];


const EventCalendar = () => {
      const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
        
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src= "/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4 ">
            {events.map(event=>(
                <div key={event.id} className="p-5 rounded-md border border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple ">
                    <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold">{event.title}</h1>
                    <span className="text-gray-300 text-sm">{event.time}</span>
                    </div>
                    <p className="text-gray-500">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar