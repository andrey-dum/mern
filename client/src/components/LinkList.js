import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkList({ links }) {
    if (!links.length) {
        return <p className="center">Ссылок пока нет!</p>
    }

    return (
        <div>
            <h1>Link List</h1>
          
            
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Original</th>
                            <th>Short</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                    {links.map((link, index) => (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/detail/${link._id}`}>Open</Link>
                            </td>
                           
                        </tr>
                    )) }
                        
                   
                    </tbody>
                </table>
        </div>
    )
}
