import './Polynomial.css';
import { useState } from 'react';

function Polynomial() {
    const [strCo, setCo] = useState('');
    const [strEx, setEx] = useState('');
    const [x, setX] = useState(0);
    const [func, setFunction] = useState('');
    const [answer, setAnswer] = useState('');

    function polynomial(e) {
        e.preventDefault();
        const coefficients = strCo.split(" ");
        const exponents = strEx.split(" ");
        const arrayco = [];
        const arrayex = [];

        let polynomialString = "";
        let answer = 0;

        for (let i = 0; i < coefficients.length; i++) {
            arrayco[i] = Number(coefficients[i]);
            arrayex[i] = Number(exponents[i]);
        }

        for (let i = 0; i < arrayco.length; i++) {
            var co = arrayco[i];
            var ex = arrayex[i];
            if (i !== 0) {
                if (co > 0) polynomialString += " + ";
                else if (co < 0) polynomialString += " - ";
            }
            if (co !== 0) {
                if (co !== 1 && co !== -1) {
                    polynomialString += Math.abs(co);
                }

                if (ex > 0) {
                    polynomialString += "x";
                    if (ex > 1) polynomialString += "^" + ex;
                }
            }

            answer += ((x ** ex) * co);
        }
        setFunction(polynomialString);
        setAnswer(answer.toString());
    }

    return (
        <form onSubmit={(e) => polynomial(e)}>
            <div className="formula">
                <h1>Polynomial Function</h1>

                <label>Coefficients:</label>
                <input type="text" value={strCo} onChange={(event) => { setCo(event.target.value) }} required />

                <label>Exponents:</label>
                <input type="text" value={strEx} onChange={(event) => { setEx(event.target.value) }} required />

                <label>x Value:</label>
                <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required />

                <button type="submit" >Calculate</button>

                <label>Function: </label>
                <input type='text' value={func} readOnly />

                <label>Answer: </label>
                <input type="text" value={answer} readOnly />
            </div>
        </form>
    )
}

export default Polynomial;