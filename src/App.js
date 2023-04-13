import './App.css';
import Slidebar from './components/Sidebar';
import TopStats from './components/TopStats';
import Body from './components/Body';
import { useState } from 'react';
function App() {
  const [selectedStartDate, setSelectedStartDate] = useState("2022-04-01");
  const [selectedEndDate, setSelectedEndDate] = useState("2022-08-28");
  return (
    <div className='bg-[#161C32] h-[100%] w-[100%] grid grid-cols-6'>
      <Slidebar/>
    <div className='md:col-span-5 col-span-6 m-5 space-y-5'>
    <TopStats selectedStartDate={selectedStartDate}  selectedEndDate={selectedEndDate} />
    <Body selectedStartDate={selectedStartDate}  setSelectedStartDate={setSelectedStartDate} selectedEndDate={selectedEndDate}  setSelectedEndDate={setSelectedEndDate}/>
    </div>
    </div>
    
  )
}

export default App;
