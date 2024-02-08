import { useState, useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

export default function ListView() {
    const { entries } = useContext(DataContext);
    return (
        <div>
        {entries.map((entry, index) => (
            <div key={index}>
                <p>{entry.name.english}</p>
            </div>
        ))}
        </div>
    );
}