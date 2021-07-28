import { DarkModeSwitcher, LighDarkModes } from './Containers/DarkModeSwitcher/DarkModeSwitcher'

import './App.css'

function App() {
  return (
    <div className="App">
      <DarkModeSwitcher className="mode-switcher-component" mode={LighDarkModes.LIGHT} />
    </div>
  );
}

export default App;
