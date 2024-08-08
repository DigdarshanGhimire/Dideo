import { useNavigate } from "react-router-dom";


const checkValidation = async (route='/',pfrom='') => {
    
  const navigate = useNavigate();

    const server = 'http://localhost:3000'+route

    const raw = await fetch(server,{
      credentials:"include"
    });
    const data = await raw.json();
    console.log(data)
    if(!data.loggedIn && pfrom!='sign'){
      return navigate('/login');
    }
    

    else if(data.loggedIn && pfrom==='sign'){

        return navigate('/');
    }


  };

  export default checkValidation;