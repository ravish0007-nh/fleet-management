
function Machine({machine}) {

  const handleClick = (e) => {

  }

  return(
    <div className='border rounded-lg p-4 space-y-4'>
      <div className='w-fit mx-auto'><span className='text-lg font-bold'>Machine</span> #{machine.id}</div>
      <div
        className='mx-auto w-fit cursor-pointer border rounded-md text-white bg-black p-2'
        onClick={handleClick}
      >
        Dispense
      </div>
    </div>
  )
}

export default Machine
