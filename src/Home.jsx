import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </>
  )
}

export default Home