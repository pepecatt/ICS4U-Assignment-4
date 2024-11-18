import './Heron.css';
import { useState } from 'react';

function Heron() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [answer, setAnswer] = useState('');

    function heron(e) {
        e.preventDefault();
        const s = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
        setAnswer(area);
        console.log(area);
    }

    return (
        <form onSubmit={(e) => heron(e)}>
            <div className="formula">
                <h1>Heron's Formula</h1>

                <label>Side A:</label>
                <input type="number" value={a} onChange={(event) => {setA(event.target.value)} } required />
                
                <label>Side B:</label>
                <input type="number" value={b} onChange={(event) => {setB(event.target.value)} } required />
                
                <label>Side C:</label>
                <input type="number" value={c} onChange={(event) => {setC(event.target.value)} } required />
                
                <button type="submit">Calculate</button>
                
                <label>Area: </label>
                <input type="text" value={answer} onChange={(event) => {setAnswer(event.target.value)} } disabled />
            </div>
        </form>
    )
}

export default Heron;