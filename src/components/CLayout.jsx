import React from "react";
import Btnicon from "./Btnicon";
import { useState, useRef } from "react";
import User from "./User";

const CLayout = () => {



  return (
    <div className="holder ">
      <div className="meetinglayout mx-2 my-1">
        <div className="meetinginfo text-center">
          <h2 className="meetingname font-bold text-2xl text-center">ASCL</h2>
          <span>Organizer - Digdarshan Ghimire</span>
        </div>
        <div className="meeting">
          <div className="meetingpeople grid gap-5">
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLayout;
