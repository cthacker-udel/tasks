import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");
    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                {[
                    "red",
                    "blue",
                    "green",
                    "orange",
                    "purple",
                    "cyan",
                    "magenta",
                    "white",
                    "black"
                ].map((eachColor, idx) => {
                    return (
                        <Form.Check
                            inline
                            id={`inline-radio-${idx}`}
                            name="radio"
                            type="radio"
                            label={eachColor}
                            style={{ backgroundColor: eachColor }}
                            value={eachColor}
                            key={idx}
                            onChange={() => setSelectedColor(eachColor)}
                        />
                    );
                })}
            </div>
            <div>
                You have chosen{" "}
                {
                    <span
                        style={{ backgroundColor: selectedColor }}
                        data-testid="colored-box"
                    >
                        {selectedColor}
                    </span>
                }
            </div>
        </>
    );
}
