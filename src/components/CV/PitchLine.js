import React from 'react'

const PitchLine = ({ pitchLine }) => (
  <h1 className="text-center my-10 text-2xl">{pitchLine.quote} {pitchLine.author}</h1>
)

export default PitchLine
