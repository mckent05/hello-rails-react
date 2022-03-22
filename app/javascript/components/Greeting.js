import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from "../Redux/GreetingPage/greeting"

const Greeting = () => {

  const dispatch = useDispatch();

  const randomGreeting = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(randomGreeting)
  return (
    <div className="greeting">
      {
        randomGreeting.length > 0 ? <h1>{randomGreeting[0].text}</h1> : <h1>Loading...</h1>
      }
    </div>
  )
}




// import React from "react"
// import PropTypes from "prop-types"
// class Greeting extends React.Component {
//   render () {

//     const { greeting } = this.props
//     return (
//       <React.Fragment>
//         <h1>{greeting}</h1>
//       </React.Fragment>
//     );
//   }
// }


export default Greeting
