import { useState } from "react";


export default function Accordeon() {
    const [show, setShow] = useState(true);


    return (
        <div>
            <div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            checked={show}
                            onChange={() => setShow(!show)}
                        />
                        <span>Show?</span>
                    </div>
                </div>
            </div>
            <button onClick={() => setShow(true)}>Show</button>
        </div>
    )
}