import {useState} from 'react'
import { useToast } from '../../Toast';
import FleetService from '../../fleetService'

import PaymentModal from '../Modals/PaymentModal'

function Machine({machine}) {
  const [isModalOpen, setIsModalOpen ] = useState(false)
  const [payment, setPayment ] = useState({})

  const toast = useToast();

  const acceptPayment = () => {
    FleetService.acceptPayment(payment.id).then((data) => {
      toast.open(`Payment made at Machine#${machine.id}`);
      setIsModalOpen(false)
    })
  }

  const rejectPayment = () => {
    FleetService.rejectPayment(payment.id).then((data) => {
      toast.open(`Payment rejected`);
      setIsModalOpen(false)
    })
  }

  const handleClick = (e) => {
    FleetService.createPayment(machine.id).then((data) => {
      setPayment(data)
      setIsModalOpen(true)
    })
  }

  return(

    <>
      <PaymentModal 
        open={isModalOpen} 
        accept={acceptPayment}
        reject={rejectPayment}
        payment={payment}
      />

      <div className='border rounded-lg p-4 space-y-4'>
        <div className='w-fit mx-auto'><span className='text-lg font-bold'>Machine</span> #{machine.id}</div>
        <div
          className='mx-auto w-fit cursor-pointer border rounded-md text-white bg-black p-2'
          onClick={handleClick}
        >
          Dispense
        </div>
      </div>
    </>
  )
}

export default Machine
