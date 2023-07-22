import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Profile from './Profile';
import Analytics from './Analytics';
import Retire from './Retire';
function App() {
  return (
    <div className="App ">
      <div className="Appcard">
        <Menu />

        <div
          className="flex flex-col md:flex-row

        "
        >
          <div className="w-full md:w-fit">
            <Profile />
          </div>
          <div className=" ">
            <Analytics />
          </div>

          <div className="w-full md:w-fit">
            <Retire />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
