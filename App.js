import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        title='Title'
        imgUrl='https://upload.wikimedia.org/wikipedia/commons/7/76/Logo_Software_University_%28SoftUni%29_-_blue.png'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet metus vitae nunc ornare pretium non elementum est. ' />
    </div>
  );
}

export default App;
