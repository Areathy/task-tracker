import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link href='/'>Go Back</Link>
      <a href='https://www.henrietha.com'>...or check this out</a>
    </div>
  )
}

export default About;