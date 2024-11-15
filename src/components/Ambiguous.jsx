import './Ambiguous.css';
import { useState } from 'react';

function Ambiguous() {
    const [angle, setAngle] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [answer, setAnswer] = useState('');

    function ambiguousCase(e) {
        e.preventDefault();
        if (angle < 0 || angle > 180 || a < 0 || b < 0) {
            setAnswer("Invalid input(s).");
            return;
        }

        const h = b * Math.sin(angle * (Math.PI / 180));
        if (angle == 90) {
            setAnswer('Right triangle.');
        } else if (angle < 90) {
            if (h > a) {
                setAnswer('No triangle.');
            } else if (a > b) {
                setAnswer('One triangle.');
            } else if (h < a && a < b) {
                setAnswer("Two triangles (Ambiguous Case)");
            }
        } else { 
            if (a < b || a == h) {
                setAnswer('No triangle.');
            } else {
                setAnswer('One triangle.');
            }
        }
    }

    return (
        <form onSubmit={(e) => ambiguousCase(e)}>
            <div className="formula">
                <h1>Ambiguous Case</h1>

                <label>Angle A:</label>
                <input type="number" value={angle} onChange={(event) => { setAngle(event.target.value) }} required />

                <label>Side A:</label>
                <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />

                <label>Side B:</label>
                <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />

                <button type="submit">Calculate</button>

                <label>Solutions: </label>
                <input type="text" value={answer} onChange={(event) => { setAnswer(event.target.value) }} required disabled />
            </div>
        </form>
    )
}

export default Ambiguous;