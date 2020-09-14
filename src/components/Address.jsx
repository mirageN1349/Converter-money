import React from 'react'

function AddressInner() {
  return (
    <div className="converter-block-address">
      <input placeholder="ETH address" type="text" className="input-address" />
    </div>
  )
}

const Address = React.memo(AddressInner)

export default Address
