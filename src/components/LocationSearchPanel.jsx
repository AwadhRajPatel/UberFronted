import React from 'react'
// import 'remixicon/fonts/remixicon.css'


const LocationSearchPanel = (props) => {
  // console.log(props);

  const locations = [
    "25B Near Gupta cafe, New Light Coaching Kanpur",
    "25D Near Sharma cafe, New Light Coaching Kanpur",
    "25F Near Patel Hotels, New Light Coaching Kanpur",
    "25Q Near Sharma cafe, New Light Coaching Kanpur",
  ]
  return (
    <div>
        {/* This is just a simple data */}
        {
          locations.map(function(elem,idx){
            return <div key={idx} onClick={() =>{
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }} className='flex gap-4 border-2 p-3 border-grey-50 active:border-black rounded-xl  items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
          })
        }

    </div>
  )
}

export default LocationSearchPanel
