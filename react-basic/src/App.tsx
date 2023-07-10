import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';
import Footer from './views/layout/Footer';
import Header from './views/layout/Header';
import Main from './views/layout/Main';

function App() {

  return (
    <>
      {
        // <TestComponent arg1={'문자열'} />
        // <TestComponent arg1={'문자열2'} arg2={100} />
      }
      <Header count={0} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
