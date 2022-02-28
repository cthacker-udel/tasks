import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <>
            <div>Attempts : {numAttempts}</div>
            <Button
                onClick={() => {
                    setNumAttempts((pastAttempts) => pastAttempts - 1);
                    setInProgress(true);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setNumAttempts((oldAttempts) => oldAttempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </>
    );
}
