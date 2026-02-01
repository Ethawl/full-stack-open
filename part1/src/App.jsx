import Anecdote from "./Anecdote"
import Unicafe from "./Unicafe"

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
          <p key={des.part}>{des.part} {des.exercises}</p>
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

const App = () => {
  const course = 'Half Stack application development';
  const description = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using Props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ];

  const numberOfExercises = description.reduce((accumulator, description) => {
    return accumulator + description.exercises
  }, 0);

  return (
    <div>
      {/* Exercises 1.1 - 1.5 */}
      <Header course={course} />
      <Content description={description} />
      <Total number={numberOfExercises} />

      {/* Exercises 1.6 - 1.14 */}
      <Unicafe />
      <Anecdote />
    </div>
  )
}

export default App