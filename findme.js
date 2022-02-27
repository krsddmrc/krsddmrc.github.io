// -------by starting-----
const numRn = Math.round(Math.random() * 99 + 1)
document.write(numrn);
    function finA(preNum){        
        if (preNum == numRn){
            document.getElementById("fino").innerHTML = "Congrulations!";
            document.numGuess.yourGuess.click()
            return;
        }
        if (preNum > numRn){
            document.getElementById("fino").innerHTML = "Down!";
            document.numGuess.yourGuess.click()
            return;
        }
        if (preNum < numRn){
            document.getElementById("fino").innerHTML = "Up!";
            document.numGuess.yourGuess.click()
            return;            
        }
    }
   


    


