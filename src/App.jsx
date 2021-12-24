
import './App.css';
import Op from "./components/opeating"
let mobileManufature = ["Samsung", "HTC","Apple","Microsoft"];
function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
     <Op> </Op>
     <h1>Mobile Manufacture</h1>
     <Mm/>
    </div>
  );
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
