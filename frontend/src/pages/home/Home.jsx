import { useNavigate } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import {useAuthContext} from '../../context/AuthContext'
import { useEffect } from "react";

const Home = () => {
    const { authUser } = useAuthContext()
    const navigate = useNavigate()
  
  useEffect(() => {
    if (!authUser) {
      navigate('/login')
     }
  }, [authUser, navigate])
    
  if (!authUser) {
    return null;
  }
    
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter bg-slate-100 backdrop-blur-sm bg-opacity-10">
            <Sidebar />
            <MessageContainer />
        </div>
    );
}

export default Home;