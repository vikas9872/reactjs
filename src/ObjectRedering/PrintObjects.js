import React from 'react'
import { fruits } from './Objects'
import "./PrintObjects.css"
const PrintObjects = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Taste</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits.map((singlefruit)=>(
                            <tr key={singlefruit.id}>
                                <td>{singlefruit.name}</td>
                                <td>{singlefruit.color}</td>
                                <td>{singlefruit.taste}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PrintObjects
