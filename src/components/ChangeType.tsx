import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <>
            <Button
                onClick={() => {
                    if (type === "multiple_choice_question") {
                        setType("short_answer_question");
                    } else {
                        setType("multiple_choice_question");
                    }
                }}
            >
                Change Type
            </Button>
            <div>
                {type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </div>
        </>
    );
}
