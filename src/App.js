import Learning from './Components/Learning'
import LearningProps from './Components/LearningProps'
function App() { // function called app which returns html

    return (
    <div className="App">
      <Learning />
      <LearningProps
      firstName={'Divya'}
      lastName={'K'}
      email={'divyak@abc.com'}/>
      <LearningProps firstName={'Vishal'} email={'vishalk@abc.com'} lastName={'K'}/>
    </div>
  );
}

export default App;
