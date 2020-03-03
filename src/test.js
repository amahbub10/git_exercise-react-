import React from "react";

function Test() {

    const [count, setCount] = React.useState(0)
    return (
        <div>
            <p>Hello Rana {count}</p>
            <h4>Any update?Develop Working - Atikv2 working</h4>
            <button onClick={ () => setCount(count + 1)}>Click Me</button>
        </div>
    )

}

export default Test;
