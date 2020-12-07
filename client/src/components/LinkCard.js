import React from 'react'

export default function LinkCard({link}) {
    return (
        <div className="linkCard"> 
            <h2>Link</h2>

            <p>Short Link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Count clicks on link: <strong>{link.clicks}</strong></p>
            <p>Date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}
