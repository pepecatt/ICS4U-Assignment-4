import './Polynomial.css';
import { useState } from 'react';

function Polynomial() {
    const [strCo, setCo] = useState( );
    const [strEx, setEx] = useState( );
    const [x] = useState( );
    const [func, setFunction] = useState( );
    const [answer, setAnswer] = useState( );

    function polynomial() {
        e.preventDefault();
        const coefficients = strCo.split(" ");
        const exponents = strEx.split(" ");
        const arrayco = [];
        const arrayex = [];

        let answer1 = "";
        let answer2 = 0;
    
        for (let i=0; i<coefficients.length; i++) {
            arrayco[i] = Number(coefficients[i]);
            arrayex[i] = Number(exponents[i]);
        }
        
        for (let i=0; i<arrayco.length; i++) {
            var co = arrayco[i];
            var ex = arrayex[i];
            if (i !== 0) {
                if (co > 0) answer1 += " + ";
                else if (co < 0) answer1 += " - ";
            }
            
            if (co !== 1 || co !== -1) {
                if (co < 0) answer1 += Math.abs(co);
                else answer1 += co;
            }
    
            if (ex > 0) {
                answer1 += "x";
                if (ex > 1) answer1 += "^" + ex;
            }
    
            answer2 += ((x ** ex) * co);
        }
        setFunction("a");
        setAnswer(answer2.toString());
    }

    return (
        <form onSubmit={(e) => polynomial(e)}>
            <div class="formula">
                <h1>Polynomial Function</h1>
                <label>Coefficients:</label>
                <input type="text" id="coefficients" value={strCo} onChange={(event) => {setCo(event.target.value) }} required />
                
                <label>Exponents:</label>
                <input type="text" id="exponents" value={strEx} onChange={(event) => {setEx(event.target.value) }} required/>
                
                <label>x Value:</label>
                <input type="number" id="x" value={x} required/>
                
                <button type="submit" id="calculatePoly">Calculate</button>
                
                <label type='text' id = "function" value={func} readOnly >Function: </label>
                <label>Answer: </label>
                <input type="text" id="polyResult" value={answer} readOnly />
            </div>
        </form>
    )
} 

export default Polynomial;