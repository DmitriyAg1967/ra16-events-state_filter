import './styles/App.scss';
import Portfolio from './components/Portfolio';
import projects from './data/projects';

function App() {
  return (
    <Portfolio list={projects} />
  )
}

export default App;