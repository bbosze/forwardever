import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Ad = ({ height, adBlocker }) => {
  const [usingAdblock, setUsingAdblock] = useState(false)

  let fakeAdBanner
  useEffect(() => {
    if (fakeAdBanner) {
      setUsingAdblock(fakeAdBanner.offsetHeight === 0)
    }
  })

  // useEffect(() => {
  //   if (!usingAdblock) {
  //     window.adsbygoogle = window.adsbygoogle || []
  //     window.adsbygoogle.push({})
  //   }
  // })
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
  window.adsbygoogle = window.adsbygoogle || []
  window.adsbygoogle.push({})
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

Ad.propTypes = {
  adBlocker: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
}

export default Ad;

