import Heron from './components/Heron'
import Ambiguous from './components/Ambiguous'
import Newton from './components/Newton'
import Polynomial from './components/Polynomial'
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <div className='card'>
          <Heron />
        </div>
        <div className='card'>
          <Ambiguous />
        </div>
        <div className='card'>
          <Newton />
        </div>
        <div className='card'>
          <Polynomial />
        </div>
      </div>
    </>
    
  )
}

export default App;