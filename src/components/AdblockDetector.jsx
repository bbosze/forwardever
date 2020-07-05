import React, { useState, useEffect } from 'react'

const AdblockDetect = () => {
  const [usingAdblock, setUsingAdblock] = useState(false)

  let fakeAdBanner
  useEffect(() => {
    if (fakeAdBanner) {
      setUsingAdblock(fakeAdBanner.offsetHeight === 0)
    }
  })

  if (usingAdblock === true) {
    return (
      <div>
        <div
          ref={r => (fakeAdBanner = r)}
          style={{ height: '1px', width: '1px', visibility: 'hidden', pointerEvents: 'none' }}
          className="adBanner"
        />
        Adblock!
      </div>
    )
  }

  return (
    <div>
      <div
        ref={r => (fakeAdBanner = r)}
        style={{ height: '1px', width: '1px', visibility: 'hidden', pointerEvents: 'none' }}
        className="adBanner"
      />
      NÓÓ Adblock!
    </div>
  )
}

export default AdblockDetect