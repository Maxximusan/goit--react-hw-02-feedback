// import Counter from '../components/Counter/Counter'
import React from 'react'

export class App extends React.Component{

  // static defaultProps = {
  //   initialValue: 0
  // }

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  // value: this.props.initialValue
  }
  
  onGood = (event) => {
    console.log(event.target);
    this.setState(prevstate => {
      console.log(prevstate.good)
      console.log(prevstate.value)
      return {
        good: prevstate.good + 1,
        
      }
     
})
  }

  onNeutral = (event) => {
    console.log(event.currentTarget);
    this.setState(prevstate => {
      return {
              neutral: prevstate.neutral + 1,
             }
})
  }

    onBad = (event) => {
    console.log(event.currentTarget);
    this.setState(prevstate => {
      return {
             bad: prevstate.bad + 1
       }
})
  }




  render() {
    const mark = this.state

    return (
      <section>
      <div>
        <h2> Please leave feedback</h2>
          <button type='button' onClick={this.onGood }>Good</button>
          <button type='button' onClick={this.onNeutral}>Neutral</button>
          <button type='button' onClick={this.onBad}>Bad</button>
      </div> 
        <div>
          <h2> Statistic </h2>
          <ul>
            <li>Good: {mark.good}</li>
            <li>Neutral: {mark.neutral}</li>
            <li>Bad: {mark.bad}</li>
        </ul>
        </div>
        </section>
    )
  }
}

        

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


// (
//   <>
//     <h1>Состояние компонента</h1>

//     <Counter initialValue={10} />
//   </>
// );