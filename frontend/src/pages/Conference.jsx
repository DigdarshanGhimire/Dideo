import React from 'react'
import CLayout from '../components/CLayout';
import { useState, useRef, useEffect, useContext } from 'react';
import checkValidation from '../components/functions/CheckValidation';
import Btnicon from "../components/Btnicon";
import User from "../components/User";
import Peer from 'simple-peer'
import io from 'socket.io-client'
import profileData from '../components/fetches/profiledata';
import BackURL from '../backendUrl';
import Signbtn from '../components/buttons/Signbtn';
import { SocketContext } from '../components/sockets/socketContext';


 
const Conference = () => {
  checkValidation();
  const [cam, setCam] = useState(false);
  const [mic, setMic] = useState(false);
  const localStream = useRef(null);
  const [remoteUsers,setRemoteUsers] = useState([])
  const [usersToJoin, setUsersToJoin] = useState([])
  const [isUsersToJoin, setIsUsersToJoin] = useState(false)
  const [me, setMe] = useState('')
  const [signalingData, setSignalingData] = useState(null);
  const [initiator, setInitiator] = useState(false)
  const [stream, setStream] = useState(null);
  const [signals,setSignals] = useState({})
  const [profile, setProfile] = useState({})


  const remoteStreams = useRef({});
  const connectionRef = useRef(null);

  const socket = useContext(SocketContext)

  useEffect(() => {
    


  }, [remoteUsers])


  


  const configurations = useRef({
    iceServers:[{
      "urls":["stun:stun.l.google.com:19302","stun:stun.12connect.com:3478","stun:stun.12voip.com:3478"]
    }
  ]
  })


  const startConference = async () => {
    try{



      navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
      }).then((stream) => {
        setStream(stream);
        localStream.current.srcObject = stream;
      }
      )
      
      const peer = new Peer({
        initiator:true,
        trickle:false,
        stream:stream
      })

      peer.on('signal',(signal) => {
        setSignalingData(data)
        socket.emit("callUser", {
          allUsers:true,
          from:me,
          signal:signal,
          name:profile.username

        })
      }
      )

      peer.on('stream',(stream) => {
        
      }
      )



      socket.on('callUser',(data) => {
        setIsUsersToJoin(true);
        setUsersToJoin([...usersToJoin, data.id]);

      }
      )
    }

    catch(err){
        console.log(err);
    }

  }
  


  //useEffect hooks:
  useEffect(() => {
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

    localStream.current.srcObject = null;
  } 
  ,[])


  useEffect(() => {
    const unloader = ()=>{
      if(stream){
        stream.getTracks().forEach( (track) => {
           track.stop()
        }
        )
      }
    }
    window.addEventListener('beforeunload',unloader)
    return () => {
      unloader();
      
    }
  }, [stream])
  
  



  return (
    <>
          <div className="holder ">
      <div className="meetinglayout mx-2 my-1 bg-black">
        <div className="meetinginfo text-center">
          <h2 className="meetingname font-bold text-2xl text-center">ASCL</h2>
          <span>Organizer - Admin</span>
        </div>
        <div className="meeting ">
          <div className="meetingpeople flex gap-5 ">
            <User localStream={localStream} cam={setCam} mic={setMic} id='me' name={profile}/>
            <Signbtn name='Start Conference' onclick={startConference}/>

          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Conference

