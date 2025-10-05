import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* SEARCH BAR */}
        <div className='hidden md:flex items-center gap-2 text-xs px-2 rounded-full ring-[1.5px] ring-gray-300'>
           <Image src="/search.png" alt="Search" width={14} height={14} className=''/>
            <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
            
        </div>
        {/* ICONS AND */}
        <div className='flex items-center gap-6'>
        <div className='bg-white w-7 h-7 flex items-center justify-center cursor-pointer rounded-full'>
            <Image src="/message.png" alt="" width={20} height={20} className=''/>
        </div>
         <div className='bg-white w-7 h-7 flex items-center justify-center cursor-pointer rounded-full relative'>
            <Image src="/announcement.png" alt="" width={20} height={20} className=''/>
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-xs text-white">1</div>
        </div>
        <div className="flex flex-col">
            <span className='text-xs leading-3 font-medium'>John Doe</span>
            <span className='text-[10px] text-grey-500 text-right '>Admin</span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar