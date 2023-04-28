
import {useState} from 'react';
import react from 'react';
import './Match-number.css'


export default function GuessNum (){
    const[num ,setNum] = useState()
    const [count,setcount]=useState(0)




    function handleOnchange(event) {
        setNum(event.target.value)
        //console.log(event.target.value)
    

    }

    const luckynumber =25  
    
    
     function handleclick() {
        setcount(count+1)
        setNum(" ")

       if(num > luckynumber){
        alert('you guessed the bigger number')
      }else if (num < luckynumber){
        alert('you guessed the smaller number ')
      }
      else{
        alert("congratulations you guessed the right number in{count}attempts ’")
      }
    }

    return(
        <div className="formstyle">
        <input
        className= "inputstyle" 
         type ="number" 
         placevalue="Guess lucky number ..."
         onChange={handleOnchange}
         />
        <button 
        className = "Btnstyle"
        onClick ={handleclick}>
          Match Number</button>
        <p>{count}</p>
        </div>
    )
}