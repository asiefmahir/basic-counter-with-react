import {useState} from 'react'




// function add (a, b) {
//     return [a + 100, b + 200]
// }

// const [x, y] =  add(10 + 1, 20)

const Counter = () => {

    const [count, setCount] = useState(0)

    /***
     * count 0
     * 0 + 1 = 1 // count = 1
     * 1 + 1 = 2 // count = 2
     */

    function increase (payload) {

        setCount(count + payload)

    }
    // increase(1)

    function decrease (payload) {

        setCount(count - payload)

    }

    return (
        <div>
            <p>
                The Counter is {count}
            </p>
            <div className="buttons">
                <button onClick = {() => increase(1)} >Add By 1</button>
                <button onClick = {() => increase(5)} >Add By 5</button>
                <button onClick = {() => increase(100)} >Add By 100</button>

                <button onClick = {() => decrease(1)} >Decrease By 1</button>
                <button onClick = {() => decrease(2)} >Decrease By 2</button>
                <button onClick = {() => decrease(5)} >Decrease By 5</button>

            </div>
        </div>
    )
}

// () => increase(1)

export default Counter