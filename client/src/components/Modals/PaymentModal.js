import ReactDom from 'react-dom'

function PaymentModal({accept, reject, payment, open}) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div
        className='fixed top-0 left-0 z-50 bg-black bg-opacity-90 w-full h-full'
      >
      <div className='z-50 p-4 rounded-md bg-white border border-slate-300 w-1/3 h-fit fixed inset-x-1/3 inset-y-1/4 space-y-4'>
        {/* <h1 className=''>Payment @ Machine#{payment.machine_id}</h1> */}
        <h1 className='w-full font-semibold border-b-2 p-2'>Payment @ Machine#{payment.machine_id}</h1>
        <p className='text-2xl'>Amount: {payment.amount}$</p>
        <div className='flex justify-around mt-10'>
            <button 
              className='p-2 rounded-md border-black border hover:bg-black hover:text-white'
              onClick={accept}
            >
              Accept
            </button>
            <button 
              className='p-2 rounded-md border-black border hover:bg-black hover:text-white'
              onClick={reject}
            >
              Reject
            </button>
        </div>
      </div>
      </div>
    </>, document.getElementById('payment-portal')
  )
}

export default PaymentModal
