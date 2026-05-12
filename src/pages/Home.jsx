import Card from "../components/Card"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-wrap">
    <Card />
    <Card />
    <Card />
    </div>
    </>
  )
}

export default Home