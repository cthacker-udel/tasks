import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [inputtedAttempts, setInputtedAttempts] = useState<number>(0);
    return (
        <div>
            <p>{numAttempts}</p>
            <Form.Control
                type="number"
                value={inputtedAttempts}
                onChange={(e) => {
                    if (!isNaN(parseInt(e.target.value))) {
                        setInputtedAttempts(parseInt(e.target.value));
                    }
                }}
            />
            <Button
                onClick={() => setNumAttempts((oldAttempts) => oldAttempts - 1)}
                disabled={numAttempts == 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setNumAttempts(
                        (oldAttempts) => oldAttempts + inputtedAttempts
                    );
                    setInputtedAttempts(0);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
