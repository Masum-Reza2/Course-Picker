const Calculation = ({ selected, totalPrice, totalHours,remaining }) => {
    return (
        <div className='border lg:w-[25%] p-5 shadow-md shadow-gray-400 rounded-lg space-y-2'>
            <p className="text-[#2F80ED] font-semibold ">Credit Hour Remaining {remaining} hrs</p>
            <div className="border-[#1C1B1B33] border-b mt-2"></div>

            <div>
                <h1 className="font-bold text-[#1C1B1B] underline">Course Name</h1>
                <div className="my-5 text-[#1C1B1B99]">
                    {
                        selected.map((item, index) => <p key={index}>{`${index + 1}. ${item}`}</p>)
                    }
                </div>
            </div>
            <div className="border-[#1C1B1B33] border-b mt-2"></div>

            <p className="text-[#1C1B1BCC] font-semibold">Total Credit Hour : {totalHours}hrs</p>
            <div className="border-[#1C1B1B33] border-b mt-2"></div>

            <p className="text-[#1C1B1BCC] font-semibold">Total Price : {totalPrice} USD</p>

        </div>
    )
}

export default Calculation