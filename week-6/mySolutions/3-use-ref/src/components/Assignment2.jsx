import { useEffect, useRef, useState } from 'react';

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [counter, forceRender] = useState(0);
    let renderCount = useRef(0)
    console.log("Assignment 2 rendered");
    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());

    };

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    }, [counter])

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};