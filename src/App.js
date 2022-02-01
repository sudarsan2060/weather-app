import {useState} from 'react';
import './App.css';

function App() {
 
  const [city,setCity] = useState("");
 const [result,setResult]=useState('');
  const changehandler = e=>setCity(e.target.value);

  const submithandler= e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data =>{
          const ktemp=data.main.temp;
          const ctemp=Math.floor(ktemp-273.15);
          setResult("Temperature at "+" "+city +" is :"+ "\n" +  ctemp +"°C");
          
        }
      ).catch(e=>console.log(e))
      setCity('');

  }
  return (
    <div className='App' >
      <center>
      <div className="card">
       <div className="card-body">
          <h2 className='card-title '>Weather App</h2>

          <form onSubmit={submithandler}>

            <input type='text' value={city} placeholder='enter place name..' onChange={changehandler}/><br/>
            <input type='submit' value='Get Temperature'/>

          </form>
          <br/>
          <hr></hr>
          <div>
            
            <h2 className='result'>{result}</h2>
          </div>
       </div>
      </div>
    
    </center>
    </div>
    )
}

export default App;
