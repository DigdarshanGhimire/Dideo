import React from 'react'
import CLayout from '../components/CLayout';
import { useState, useRef, useEffect } from 'react';
import checkValidation from '../components/functions/CheckValidation';
import Btnicon from "../components/Btnicon";
import User from "../components/User";
import Peer from 'simple-peer'
import io from 'socket.io-client'

import { socket } from '../components/sockets/socket';

 
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


  const remoteStreams = useRef({});

  useEffect(() => {
    


  }, [remoteUsers])
  


  const configurations = useRef({
    iceServers:[{
      "urls":["stun:stun.l.google.com:19302","stun:stun.12connect.com:3478","stun:stun.12voip.com:3478"]
    }
  ]
  })


  const startConference = () => {
    new Peer({
      initiator:true,
      trickle:false,
      stream:stream
    })
  }
  

  useEffect(() => {
    localStream.current.srcObject = null;
    try{

      navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
      }).then((stream) => {
        setStream(stream);
        localStream.current.srcObject = stream;
      }
      )

      peer.on('signal',(data) => {
        socket.emit()
      }
      )

      socket.on('me',(id) => {
        setMe(id)
        console.log(me);
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
  ,[])



  return (
    <>
          <div className="holder ">
      <div className="meetinglayout mx-2 my-1">
        <div className="meetinginfo text-center">
          <h2 className="meetingname font-bold text-2xl text-center">ASCL</h2>
          <span>Organizer - Admin</span>
        </div>
        <div className="meeting ">
          <div className="meetingpeople flex gap-5 ">
            <User localStream={localStream} cam={setCam} mic={setMic}/>

          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Conference

