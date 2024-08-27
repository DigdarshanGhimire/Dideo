import BackURL from '../../backendUrl'


async function profileData(){
  console.log(BackURL)
  let data;
  await fetch(BackURL + '/api/profiledata',{credentials:"include"}).then(async (res) => {
      data = await res.json();
      
})
  return data
}


export default profileData;
