import './App.css';
import Header from './components/Header/Header';
import RecommandedVIdeos from './components/RecommandedVIdeos/RecommandedVIdeos';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      <div className="app-page">
      <Sidebar></Sidebar>
      <RecommandedVIdeos></RecommandedVIdeos>
      </div>
      {/* Sidebar */}
      {/* RecommendedVideo */}
      
    </div>
  );
}

export default App;
