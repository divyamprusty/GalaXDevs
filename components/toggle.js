import React from 'react'

export default function toggle() {
    function HandleToggle(){
        document.body.classList.toggle('dark')
      }
    return (
        <div className="toggleButton">
            <input onClick = {HandleToggle} type="checkbox" className="checkbox" id="checkbox"/>
            <label htmlFor="checkbox" className='label' id='label'>
                <div className='ball' id='ball'></div>
            </label>
        </div>
    )
}
