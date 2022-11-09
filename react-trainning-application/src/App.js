import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';



function App() {
  
  return (
    <div>
      <Header name="This is header prop"></Header>
      <Content name="This is prop of content component"></Content>
      <Footer name="This is prop of footer component"></Footer>     
    </div>
  );
}

export default App;
