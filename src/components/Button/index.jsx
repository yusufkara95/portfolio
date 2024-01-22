import React from 'react'
import { Github, PaintRoller } from 'lucide-react';


import './index.css'

function Button({ text, url }) {

  const getIcon = () => {
    if (text === 'GitHub') {
      return <Github color="white" size={48} />;
    } else {
      return <PaintRoller color="white" size={48} />;
    }
  };


  return (
    <a href={url}>
      <button style={{ alignItems: 'center', width: 125 }} className='button'> {getIcon()}
        {text}
      </button>
    </a>
  )
}

export default Button