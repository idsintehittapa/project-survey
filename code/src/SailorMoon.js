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
    const { setSailorMoon, sailorMoon } = props
    return (
        <div className="sailor-moon-wrapper">
            <h2>Sailor Moon character?</h2>
            <img
                className="sailor-moon-image"
                alt="visualization of sailor moon group"
                src={img}
            />
            {sailorMoons.map(group => (
                <label htmlFor="InputRadio" key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={event => setSailorMoon(event.target.value)}
                        checked={sailorMoon === group}
                        required
                    />
                    {group}
                </label>
            ))}
        </div>
    )
}

export default SailorMoon