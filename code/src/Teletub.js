import React from 'react'

import './Teletubbies.css'
import img from './images/teletubbies.jpg'

const Teletub = props => {
  const { question, setTeletubbies, teletubbies } = props
  return (
    <div className="teletubbies-wrapper">
      <h2 tabIndex="0">{question}</h2>
      <img
        tabIndex="0"
        className="tt-image"
        alt="visualization of a south park siter of teletubbies"
        src={img}
      />
      <label
        tabIndex="0"
        htmlFor="teletub">Choose one of the four teletubbies</label>
      <select
        onSubmit={event => event.preventDefault()}
        aria-label="select-menu"
        onChange={(event) => setTeletubbies(event.target.value)}
        value={teletubbies}
        aria-controls="collapse"
        aria-orientation="vertical"
        aria-expanded="false"
      >
        <option value="">Choose teletubbies!</option>
        <option tabIndex="-1" value="Tinky Winky - purple">Tinky Winky - purple</option>
        <option tabIndex="-1" value="Dipsy - green">Dipsy - green</option>
        <option tabIndex="0" value="Laa-Laa - yellow">Laa-Laa - yellow</option>
        <option tabIndex="0" value="Po - red">Po - red</option>
      </select>
    </div>
  )

}

export default Teletub