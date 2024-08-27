import profileData from "../fetches/profiledata";
import { useSelector, useDispatch } from 'react-redux'
import { setSocketID } from "../../redux/meSlice";

export const connectRoom = (socket,setProfile, setMe) => {
  
profileData().then((data) => {
    
    if(data.loggedIn){
      setProfile(data.content);
      console.log(data.content)
      socket.emit('connectRoom',{
        id:data.content.id
      })
    }
  }
  )
  
  socket.on('me',(id) => {
    setMe(id)
  })

}
