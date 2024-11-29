import React from 'react'

function ConfirmMobileView() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
            <button className="w-full bg-[#e21b70] text-white p-4 rounded-lg mt-2 hover:bg-[#bb185f] flex  items-center ">
                <div className='text-center flex-grow'>
                    Confirm Order
                </div>
                <div className='ml-auto  pr-4'>
                    250 TL
                </div>
            </button>
        </div>
    )
}

export default ConfirmMobileView