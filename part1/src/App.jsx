const App = () => {
  const course = 'Half Stack application development'
  const description = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using Props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  const numberOfExercises = description.reduce((accumulator, description) => {
    return accumulator + description.exercises
  }, 0)

  return (
    <div>
      <Header course={course} />
      <Content description={description} />
      <Total number={numberOfExercises} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>{course}</div>
  )
}

const Content = ({ description }) => {
  return (
    <>
      {description.map((des) => {
        return (
          <p>{des.part} {des.exercises}</p>
        )
      })}
    </>
  )
}

const Total = ({ number }) => {
  return (
    <p>Number of exercises {number}</p>
  )
}

export default App