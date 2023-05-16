import React from "react"
import { useSelector, useDispatch } from 'react-redux';

function Option2() {

  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <h3>测试 react-redux8.x</h3><br />
      <p>{count}</p><br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>加1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>减1</button>
    </>
  )
}

export default Option2