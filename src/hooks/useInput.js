import { useState } from "react";

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return [value, onChange];
}

export default useInput;