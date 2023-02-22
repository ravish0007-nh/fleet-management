import Machines  from './Machines'
import Locations from './Locations'
import Users from './Users'


function ViewData() {

  return (
    <div className='w-1/2 m-auto mt-10 space-y-8'>
      <Machines />
      <Locations />
      <Users />
    </div>
  );
}

export default ViewData;
