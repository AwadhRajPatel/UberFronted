import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
          props.setVehiclePanel(false);
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full  p-3 items-center justify-between'>
          <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full  p-3 items-center justify-between'>
          <img className='h-12' src="data:image/jpeg;base64,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" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorCycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full  p-3 items-center justify-between'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.86</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
