import React from 'react'
import { MemoizedClient } from './client'

function Clients({ data }) {
    return (
        <div className='filterArea' style={data.length < 1 ? { padding: 0, height: 0 } : {}}>
            {data.map((item, i) => (
                <MemoizedClient key={i} data={item}></MemoizedClient>
            ))}
        </div>
    )
}

export default Clients