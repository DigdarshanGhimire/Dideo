import BackURL from '../../backendUrl'


async function roomData(collection=false,roomid=null){
  console.log(BackURL)
  let data;

    collection? portion='/api/rooms/': portion=`/api/roomdata/${roomid}`;
  await fetch(BackURL + portion,{credentials:"include"}).then(async (res) => {
      data = await res.json();
      
})
  return data
}


export default roomData;