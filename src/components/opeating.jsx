let operatingSystem = ["Android", "Blackberry", "Iphone", "Winddows Phone"];
function Op({children}) {
  return operatingSystem.map((e) => (
    <ul>
      <li>{e}</li>
    </ul>
    
  ));
}

export default Op;
