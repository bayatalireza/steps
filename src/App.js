
import './App.css';
// import StepMessage from './StepMessage';
import Steps from './Steps';

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 😔 ",
    "Invest your new income 💰",
    "Keep learning and growing ���"
  ];
  return (
    <div className="App">
      <Steps messages={messages}/>
      {/* <StepMessage >
      <p>Pass in content</p>
      <p>✌️</p>
      </StepMessage >
      <StepMessage >
      <p>Read children prop</p>
      <p>😎</p>
      </StepMessage > */}

    </div>
  );
}

export default App;
