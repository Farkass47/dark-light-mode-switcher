import { DarkModeSwitcher, LighDarkModes } from './Containers/DarkModeSwitcher/DarkModeSwitcher'

function App() {
  return (
    <div className="App">
      <DarkModeSwitcher mode={LighDarkModes.LIGHT} />
    </div>
  );
}

export default App;
