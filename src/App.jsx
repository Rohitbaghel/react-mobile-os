
import './App.css';
let operatingSystem = ["Android", "Blackberry", "Iphone", "Winddows Phone"];
let mobileManufature = ["Samsung", "HTC","Apple","Microsoft"];
function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
     <Op/>
     <h1>Mobile Manufacture</h1>
     <Mm/>
    </div>
  );
}

function Op(){
  return (
    
      
      operatingSystem.map(e=>
        <ul>
      <li>{e}</li>
        </ul>
      )
    

  )
  
}

function Mm(){
  return (
    
      
      mobileManufature.map(e=>
        <ul>
      <li>{e}</li>
        </ul>
      )
    

  )
  
}
export default App;
