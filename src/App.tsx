import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                <h1>Cameron Thacker - Hello World</h1>
            </p>
            <img alt="hello world" />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <ol>
                <li>Random list</li>
                <li>With three</li>
                <li>Elements</li>
            </ol>
        </div>
    );
}

export default App;
