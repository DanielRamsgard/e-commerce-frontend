import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
        <div className="nav-bar">
            <NavBar/>
        </div>
        <div className="content">
            <div className="categories">
                <div className="left">
                    <div className="box-left-big">
                        <div className="text anek-malayalam-font">Living Room</div>
                        <img className="box-left-big-img" src="/static/media/house.png"></img>
                    </div>
                    <div className="box-left-small">
                        <div className="text anek-malayalam-font"> Skincare </div>
                        <img className="box-left-small-img" src="/static/media/bottle.jpeg"></img>
                    </div>

                </div>
                <div className="right">
                    <div className="box-right">
                        <div className="text anek-malayalam-font"> Kichen </div>
                        <img className="box-right-img" src="/static/media/kitchen.jpeg"></img>
                    </div>
                    <div className="box-right">
                        <div className="text anek-malayalam-font"> Electronics </div>
                        <img className="box-right-img" src="/static/media/electronics.jpeg"></img>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
