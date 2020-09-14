import React from 'react'

function ButtonNextInner() {
  return <button className="converter-next">next</button>
}

const ButtonNext = React.memo(ButtonNextInner)

export default ButtonNext
