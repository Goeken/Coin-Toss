import React from 'react';
import Title from './components/Title';
import Toss from './components/Toss';
import Begin from './components/Begin';
import Score from './components/Score';

class App extends React.Component{

  state = {
    heads: true,
    tails: true,
    tossed: 0,
    headCount: 0,
    tailCount: 0
  }



  HandleGameClick = async (e) => {

    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0){
      this.setState({
        heads: true,
        tails: false,
        tossed: this.state.tossed +=1,
        headCount: this.state.headCount +=1
      });
    } else {
      this.setState({
        heads: false,
        tails: true,
        tossed: this.state.tossed +=1,
        tailCount: this.state.tailCount +=1
      });
    }

  }

  render(){
    return(
      <div >
        <Title />
        <Toss  
          heads={this.state.heads} 
          tails={this.state.tails}
          />

        <Score
          tossed={this.state.tossed}
          headCount={this.state.headCount}
          tailCount={this.state.tailCount}
         />
        <Begin handleGameClick={this.HandleGameClick} />
      </div>
      );
  }
}

export default App;