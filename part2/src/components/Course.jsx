import React from 'react'

const Course = ({ courses }) => {
    return (
        <>
            {courses.map((c) => {
                return (
                    <div key={c.id}>
                        <h2>{c.name}</h2>
                        {c.parts.map((p) => {
                            return (
                                <p key={p.id}>{p.name} {p.exercises}</p>
                            )
                        })}
                        total of exercises {c.parts.reduce((sum, current) => sum + current.exercises, 0)}
                    </div>
                )

            })}
        </>
    )
}

export default Course
