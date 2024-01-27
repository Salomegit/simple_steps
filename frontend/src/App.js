import "./styles/index.css"

import {useState} from "react"



const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 

function App() {

  const [step,setStep] = useState(1)



  function handleNest() {
    if(step<3)setStep (step + 1)
    
  }
  function handlePrevious(){
    if(step>1)setStep (step - 1)

  }
 
  fetch("http://catfact.ninja/fact")
  .then(res => res.json())
 .then(data => {console.log(data);})
 .catch(error => { console.error('Error fetching data:', error); });



  return(

    <div className="steps">
    <div className="numbers">
    <div className={`${step >= 1? "active":""}`}>1</div>
  
    <div className={`${step >= 2? "active":""}`}>2</div>
   
    <div className={`${step >= 3? "active":""}`}>3</div>

    </div>
    <p className="message">
     Step {step}:{messages[step - 1]}


    </p>
    <div className="buttons">
      <button style={{backgroundColor: "#7950f2",color:"#fff"}} onClick={handlePrevious}>Previous</button>
      <button style={{backgroundColor: "#7950f2",color:"#fff"}} onClick={handleNest}>Next</button>

    </div>
    
    </div>
  )
}




export default App;
