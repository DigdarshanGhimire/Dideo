import React from "react";
import Sign from "../components/Sign";
import { useRef } from "react";
import Signbtn from "../components/buttons/Signbtn";
import BackURL from "../backendUrl";
import checkValidation from "../components/functions/CheckValidation";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  checkValidation();

  const navigate = useNavigate()
  const form = useRef({});

  const createroom = () => {
    console.log("Creating...")
    fetch(BackURL+'/form/submit/create-room/', {
      method:'POST',
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(form.current),
      credentials: "include"
    }).then(async (res) => {
      const data = await res.json();
      if(data.createdRoom){
        navigate('/room/'+data.roomid)
      }
    }
    )
  }
  
  return (
    <div>
      <div className="body flex ">
        <section>
          <div>

          <Sign form={form} name={"name"} placeholder={"Name"}></Sign>
          <Sign form={form} name={"description"} placeholder={"Describe your room!"} textarea={true}></Sign>
          </div>

          <Signbtn name="Create Room" onclick={createroom}/>
        </section>

        <section className="displaycontent grid">


        </section>
      </div>
    </div>
  );
};

export default CreateRoom;
