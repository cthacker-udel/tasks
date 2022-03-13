import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <Form.Control
                type="textarea"
                value={answer}
                placeholder="enter answer here"
                onChange={(e) => setAnswer(e.target.value)}
            />
            {answer === expectedAnswer ? <>✔️</> : <>❌</>}
        </div>
    );
}
