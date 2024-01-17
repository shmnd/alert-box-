import { useState } from "react";

function App() {

  const [state,setState]=useState('')

  const alertbox=()=>{
    alert(state)
  }

  return (
    <div>

      <h2>Enter your Alert msg</h2>

      <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>

      <button onClick={alertbox}>submit</button>

    </div>
  );
}

export default App;
