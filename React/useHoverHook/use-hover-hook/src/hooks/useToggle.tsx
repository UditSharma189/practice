import { useState } from "react";

export const useToggle = (on: boolean): [boolean, () => void] => {
    const [toggle, setToggle] = useState<boolean>(on);

    const toggleHandler = () => setToggle(prevState => !prevState);

    return [toggle, toggleHandler]
}