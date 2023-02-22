import './index.css';
import Machines  from './components/Machines'
import Locations from './components/Locations'
import Users from './components/Users'


function App() {

  return (
    <div className='w-1/2 m-auto mt-10 space-y-4'>
      <Machines />
      <Locations />
      <Users />
    </div>
  );
}

export default App;
