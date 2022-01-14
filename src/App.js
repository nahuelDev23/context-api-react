import './App.css';
import { TaskProvider } from './context/character/CharacterContext';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <TaskProvider>
      <AppRouter />
    </TaskProvider>
  );
}

export default App;
