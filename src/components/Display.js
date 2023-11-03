import React from 'react'
import '../App.css';

export default function Display({ input, result }) {
    return (
        <div className="display">
          <div className='input'>
            {input}
          </div>
          <div className='result'>
            <b>{result}</b>
          </div>
        </div>
    );
}
