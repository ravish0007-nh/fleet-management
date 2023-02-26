function Order({order}) {

  const date = new Date(Date.parse(order.paid_at))
  return(
    <div className='border border-black rounded-md px-6 py-4'>
      <div className='font-semibold'>Machine#{order.machine_id}</div>
      <div className='ml-10'>
        <div>Amount: {order.amount}</div>
        <div>Timing: {date.toLocaleDateString()}, {date.toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default Order
