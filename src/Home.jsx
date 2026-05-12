import { Link } from "react-router-dom"
import Button from "./Button"
import Card from "./Card"

const Home = () => {
  return (
    <>
    {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
    </nav> */}

    <Button text='Register'/>
    <Button text='Login'/>
    <Button text='Logout'/>
    <Card title='Sushit' description='Hello, This is sushit, student at Tribhuvan University'/>
    <Card title='Ram' description='Hello, I am Ram, professor at Pokhara University'/>
    </>
  )
}

export default Home