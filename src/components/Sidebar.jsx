import {MdDashboard,MdReportProblem,MdCategory,MdNotifications} from 'react-icons/md'
import {AiOutlineUser,AiOutlineUserAdd,} from 'react-icons/ai'
import {BiInfoCircle, BiVideo} from 'react-icons/bi'
import {FaQuestionCircle} from 'react-icons/fa'

const sideDetails = [
  {
    id: 1,
    title: "dashboard",
    icon:<MdDashboard/>
  },
  {
    id: 2,
    title: "wow users",
    icon:<AiOutlineUser/>
  },
  {
    id: 3,
    title: "video clips",
    icon:<BiVideo/>
  },
  {
    id: 4,
    title: "reported content",
    icon:<MdReportProblem/>
  },
  {
    id: 5,
    title: "category",
    icon:<MdCategory/>
  },
  {
    id: 6,
    title: "info page",
    icon:<BiInfoCircle/>
  },
  {
    id: 7,
    title: "FAQ",
    icon:<FaQuestionCircle/>
  },
  {
    id: 8,
    title: "push notification",
    icon:<MdNotifications/>
  },
  {
    id: 9,
    title: "internal user",
    icon:<AiOutlineUserAdd/>
  
  },
  {
    id: 10,
    title: "explicit content",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 11,
    title: "feedback messages",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 12,
    title: "KYC",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 13,
    title: "coin withdrawal request",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 14,
    title: "coin purchased",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 15,
    title: "coin transfer history",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 16,
    title: "coin earning history",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 17,
    title: "free coin earning",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 18,
    title: "users deleted",
    icon:<AiOutlineUserAdd/>
  },
  {
    id: 19,
    title: "users feedbacks",
    icon:<AiOutlineUserAdd/>
  },
];

function sidebar() {
  return (
    <div className="bg-[#283046] h-max col-span-1 p-2 hidden md:block">
        <div className="text-center pb-4">
        <span className="uppercase font-medium text-xl font-serif text-red-800">wow-</span>
        <span className="uppercase font-medium text-xl font-serif text-white">talent</span>
        </div>
      
      <ul className="space-y-1">
        {sideDetails.map(({id,title,icon})=>(
          
         
        <li key={id} className="rounded-sm pl-8 py-1.5 capitalize hover:bg-[#F5821F] hover:scale-105 ease-out text-white  font-semibold text-base flex ">
         <span className='m-0 pt-1 pr-2'>{icon}</span>
  {title}</li>
        
        ))}
        
      </ul>
    </div>
  );
}
export default sidebar;
