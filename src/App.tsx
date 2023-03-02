import reactLogo from './assets/react.svg'
import './App.css'
import Count from './components/Count'
import { Counter_Provider } from './context/Counter_Provider'
import Test_Global_State from './components/Test_Global_State.tsx'
import {RecoilRoot} from "recoil"
import Count_recoil from './components/Count_recoil.tsx'

function App() {

    return <Counter_Provider>
        <div className="App">
            <img src={reactLogo} />
            <h1>STATE INTRO</h1>
            <Count />
            <RecoilRoot>
                <section>
                    <Count_recoil />
                </section>
                <Test_Global_State />
            </RecoilRoot>
        </div>
    </Counter_Provider>
}

export default App
