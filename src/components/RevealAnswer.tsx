import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [show, setShow] = useState<boolean>(false);
    return (
        <>
            <Button
                name="Reveal Answer"
                onClick={() => {
                    setShow((prevShow) => !prevShow);
                }}
            >
                Reveal Answer
            </Button>
            {show ? <div>42</div> : <></>}
        </>
    );
}
