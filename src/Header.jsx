import React from 'react'

function Header() {
    return (
        <div className='flex justify-between px-10 pt-4'>
            <div className='w-[10vw] max-md:w-[30vw] max-sm:w-[50vw]'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2560px-Marvel_Studios_2016_logo.svg.png'></img>
            </div>
            <div className=' '>
                <input
                    className="p-2 rounded-lg text-black border-4 w-64 border-black"
                    type="text"
                    placeholder="Search the MCU"
                />
            </div>

        </div>
    )
}

export default Header