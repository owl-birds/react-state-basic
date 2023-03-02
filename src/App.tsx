import reactLogo from './assets/react.svg'
import './App.css'
import Count from './components/Count'
import { Counter_Provider } from './context/Counter_Provider'

function App() {

    return <Counter_Provider>
        <div className="App">
            <img src={reactLogo} />
            <h1>STATE INTRO</h1>
            <Count />
        </div>
    </Counter_Provider>
}

export default App
