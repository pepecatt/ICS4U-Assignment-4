import './Newton.css';
import { useState } from 'react';

function Newton() {
    var [g, setGuess] = useState('');
    const [answer, setAnswer] = useState('');

    function newtonsMethod(e) {
        e.preventDefault();
        g = parseFloat(g);
        function f(x) {
            return 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
        }
        function deriv(x) {
            return 24 * x ** 3 - 39 * x ** 2 - 36 * x;
        }

        var newGuess = 0;
        var rootGuess = false;

        do {
            newGuess = g - f(g) / deriv(g);
            if (Math.abs(g - newGuess) < 0.1) {
                rootGuess = true;
            }
            g = newGuess;
            console.log(newGuess);
        } while (!rootGuess);

        setAnswer(newGuess);
    }

    return (
        <form onSubmit={(e) => newtonsMethod(e)}>
            <div className="formula">
                <h1>Newton's Method</h1>
                
                <label>Root guess:</label>
                <input type="number" value={g} onChange={(event) => { setGuess(event.target.value) }} required />

                <button type="submit">Calculate</button>

                <label>Root approximation: </label>
                <input type="text" value={answer} onChange={(event) => { setAnswer(event.target.value) }} required disabled />
            </div>
        </form>
    )
}

export default Newton;