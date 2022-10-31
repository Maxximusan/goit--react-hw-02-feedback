// import Counter from '../components/Counter/Counter'
import React from 'react'
import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from 'components/Notification/Notification'

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
  

  onLeaveFeedback = (option) => {
     console.log(option);
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
        
      };
    });
  };

//   onGood = (event) => {
//     console.log(event.target);
//     this.setState(prevstate => {
//       console.log(prevstate.good)
//       console.log(prevstate.value)
//       return {
//         good: prevstate.good + 1,
        
//       }
     
// })
//   }

//   onNeutral = (event) => {
//     console.log(event.currentTarget);
//     this.setState(prevstate => {
//       return {
//               neutral: prevstate.neutral + 1,
//              }
// })
//   }

//     onBad = (event) => {
//     console.log(event.currentTarget);
//     this.setState(prevstate => {
//       return {
//              bad: prevstate.bad + 1
//        }
// })
//   }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    return good + neutral + bad
}

  countPositiveFeedbackPercentage = () => {
    const goodMark = this.state.good
    const total = this.countTotalFeedback()
    console.log(goodMark)
    console.log(total);
    const averagePositiveFeedback = Math.round(goodMark / total * 100);
    return total !== 0 ? averagePositiveFeedback : 0
    

    
  }
  

  render() {
    const mark = this.state
    

    return (
      <>
  
      <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0
          ? (
       <Statistics
            good={mark.good}
            neutral={mark.neutral}
            bad={mark.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
            
            </Statistics>
         ) : (<Notification message="There is no feedback"></Notification>)}
         </Section>
        </>
    )
  }
}

         
          
        //    <ul>
        //     <li>Good: {mark.good}</li>
        //     <li>Neutral: {mark.neutral}</li>
        //     <li>Bad: {mark.bad}</li>
        //     <li>Total: {this.countTotalFeedback()}</li>
        //     <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        // </ul>
          

      


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