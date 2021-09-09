import {Header} from "./client/components/Header";
import {Textarea} from "./client/components/Textarea";
import {JsonBlock} from "./client/components/JsonBlock";

import './App.css';

import './bootstrap.min.css';


function App() {

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column p-1 App">
            <Header/>
            <Textarea/>
            <JsonBlock/>
        </div>
    );
}

export default App;
