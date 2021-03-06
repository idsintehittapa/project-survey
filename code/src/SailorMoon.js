import React from 'react'

import './Radio.css'

import img from './images/sm.png'

const sailorMoons = [
  "Sailor Moon - yellow",
  "Sailor Saturn - purple",
  "Sailor Mars - red",
  "Sailor Pluto - green"
]

const SailorMoon = props => {
  const { question, setSailorMoon, sailorMoon } = props
  return (
    <div className="sailor-moon-wrapper">
      <h2 tabIndex="0">{question}</h2>
      <img
        tabIndex="0"
        className="sailor-moon-image"
        alt="visualization of sailor moon group"
        src={img}
      />
      <label
        tabIndex="0"
        htmlFor="sailor">Choose one of the four Sailor Moon character!</label>
      {sailorMoons.map(group => (
        <label className="radiobuttons-label" htmlFor={group} key={group}>
          <input
            type="radio"
            id={group}
            name={group}
            value={group}
            onChange={event => setSailorMoon(event.target.value)}
            checked={sailorMoon === group}
          />
          {group}
        </label>
      ))}
    </div>
  )
}

export default SailorMoon