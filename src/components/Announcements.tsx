const Announcements = () => {
  return (
    <div className='bg-white rounded-md p-4'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-gray-500">View all</span>
        </div>
        <div className="flex flex-col gap-4 my-4">

        <div className="bg-lamaSkyLight p-4 rounded-md">
            <div className="flex items-center justify-between gap-4">
                <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                <span className="bg-white p-1 rounded-md text-xs text-gray-300">2025-03-03</span>

            </div>
                <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque perferendis? Temporibus architecto,</p>
        </div>
        <div className="bg-lamaPurpleLight p-4 rounded-md">
            <div className="flex items-center justify-between gap-4">
                <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                <span className="bg-white p-1 rounded-md text-xs text-gray-300">2025-03-03</span>

            </div>
                <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque perferendis? Temporibus architecto,</p>
        </div>
        <div className="bg-lamaSkyLight p-4 rounded-md">
            <div className="flex items-center justify-between gap-4">
                <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                <span className="bg-white p-1 rounded-md text-xs text-gray-300">2025-03-03</span>

            </div>
                <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque perferendis? Temporibus architecto,</p>
        </div>
        </div>
    </div>
  )
}

export default Announcements