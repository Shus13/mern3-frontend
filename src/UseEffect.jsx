import { useEffect, useState } from "react"

const UseEffect = () => {

    const[like, setLike] = useState(0)

    const increaseLike = () =>{
        setLike(like+1)
    }

    useEffect(()=>{
        console.log("Like badhyo")
    }, [like])

  return (
    <>
        <h1>Like: {like}</h1>
        <button onClick={increaseLike}>Like me </button>
    </>
  )
}

export default UseEffect