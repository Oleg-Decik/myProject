import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Congrats from "./Congrats/Congrats";

const data = [1,2,3,4,5,6,7,8,9,0,10,11,12,13];

function App() {
    return (
        <div className="App">
            <ul>
                <li>{data[0]}</li>
                <li>{data[1]}</li>
                <li>{data[2]}</li>
                <li>{data[3]}</li>
            </ul>
            <button onClick={hello}>Hello?</button>
            <button onClick={newData}>New data?</button>
        </div>
    );
}

function hello() {
    ReactDOM.render(<Congrats/>, document.getElementById('app'));
}

function newData(repeat = 0) {

    const newDatas = [0,0,0,0];
    for (let i = 4 ; i < 8 ; i++ ){
        newDatas[i - 4] = data[i];
    }
    const newData = {
        div: <div className="App"> <ul>
            <li>{newDatas[0]}</li>
            <li>{newDatas[1]}</li>
            <li>{newDatas[2]}</li>
            <li>{newDatas[3]}</li>
        </ul>
        </div>
    };
    ReactDOM.render(newData.div, document.getElementById('root'));
}

export default App;
