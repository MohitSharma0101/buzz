import React from 'react'
 
export default function AutoResizeInput({...attrs}) {
return (
    <textarea rows={1} onChange={makeRezise} {...attrs} />
  )
}

function makeRezise(event){
  const input = event.target;
  input.style.height= "auto";
  input.style.height = input.scrollHeight + "px";
}
