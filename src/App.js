import './App.css';
import VoiceRecognition from './voiceRecognition/voiceRecognition';
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './components/dashboard';
import sendData from './voiceRecognition/data';
import { useState } from 'react';





function App() {
  // function dosomething() {
  //   setX("")
  //   sendData("I HAVE A COUGH, headache, and a fever");
  // }
  // const [x, setX] = useState("Hello");
  // return <div>
  //   <h1>'{x}'</h1>
  //   <button onClick={dosomething}>Default</button>;
  //   </div>
  return (<VoiceRecognition/>);
}

export default App;
