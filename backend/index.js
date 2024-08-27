const express = require('express')
const http = require('http')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const socket = require('socket.io')


//Creating the server
const app = express()

const server = http.createServer(app)

const io = socket(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"]
  }
})





//Database stuff
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/dideo');
const User = require('./models/User.js')


const Room = require('./models/Room.js')



//Managing session and cookie settings
const secretKey = "superdupersecret"

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"],
  methods:["GET","POST"]
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
  session({
      name: 'qid',
      secret: secretKey,
      resave: false,
      saveUninitialized: false,
      cookie: {
          httpOnly: true,
          secure: false,
          maxAge: 1000 * 60 * 60 * 24 * 365
      }
  })
);


//For retreiving json data from the client
app.use(express.json())


//The port on which the server runs
const port = 3000;



//Handling sockets



io.on('connection',(socket) => {

  socket.on('disconnect',() => {
    User.updateOne({_id:data.id},{$set:{online:false}})
    console.log("Disconnected from socket backend"); 
   }
  )
  socket.on('callUser',(data)=>{
    io.to(data.userToCall).emit('callUser', {signal:data.signalData, from: data.from, name: data.name})
  })

  socket.on('answerCall',(data) => {
    socket.to(data.to).emiit('callAccepted',data.signal)
  })

  
  socket.on('connectRoom',async (data) => {
    User.updateOne({_id:data.id},{$set:{online:true}})
    console.log('connected')
    const sID = socket.id
    console.log(socket.id,data)
    socket.emit("me",socket.id)

    result = await User.findById(data.id);
    const rooms = result.rooms
    socket.join(data.id)
    rooms.forEach((room) => {
      socket.join(`room -${room}`);
    }
    )
  }
  )

}
)





//Handling requests
app.get('/', (req, res) => {
  if(req.session.user){
  res.json({loggedIn:true})
  }
  else{
    res.json({loggedIn:false})
  }
})


app.post('/form/submit/create-room/',async (req,res) => {
  if(req.session.user){
    const room = new Room({
      ...req.body, admins:[req.session.user.id], users:[req.session.user.id]
    }
  );
  const user = await User.findOne({_id:req.session.user.id})
  console.log('id', req.session.user.id)

  const updateduser = await User.updateOne(
    {_id:req.session.user.id},
    {$set:{rooms:[...user.rooms, room._id]}}
  )
  console.log(updateduser)
  room.save()
    res.json({createdRoom:true, roomid:room._id})

  }
}
)

app.post('/form/submit/signup',async (req,res) => {
  console.log('yo')
  console.log(req.body);

  const existingUserswithEmail = await User.findOne({email:req.body.email})
  console.log(existingUserswithEmail)
  if(existingUserswithEmail){
    
    return res.json({SignedUp:false,message:'Email already exists'})
  };
  
  const existingUserswithPhone = await User.findOne({phone:req.body.phone});
  console.log(existingUserswithPhone)
  if(existingUserswithPhone){
    return res.json({SignedUp:false, message:'Phone number already exists'})
  };
  
  if(req.body.password.length<8 || req.body.password>20){
    return res.json({SignedUp:false, message:"Password must be between 8-20 characters"})
  }
  
  const user = new User({
    ...req.body
  })
  console.log(user.save())
  res.json({SignedUp:true, message:'Successful, Redirecting!'});
}
) 


app.post('/form/submit/login',async (req,res) => {
  console.log('yo')

  
  
  results = await User.findOne({...req.body});
  
  

  if(results){
    req.session.user = {'username':results['name'],'id':results['id']};
    console.log(req.session.user)
    res.json({loggedIn:true});

  }
  else{

    res.json({loggedIn:false})
  }

}
);


app.get('/api/profiledata',async (req,res) => {
  if(req.session.user){
    const user = await User.findOne({_id:req.session.user.id});
    return res.json({loggedIn:true,content:{username:req.session.user.username, id:req.session.user.id, email:user.email, rooms:user.rooms}});
  }
  return res.json({loggedIn:false, message:'LogIn first'})
}
)

app.get('/api/roomdata/:roomid',async (req,res) => {
  if(req.session.user){
    const room = await Room.findOne(req.params.roomid)
    
    return res.json({})
}
return res.json({})
}
)

app.post('/api/logout',(req,res) => {
  req.session.destroy();
  res.json({loggedOut:true});
}
)


//Running the server
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});