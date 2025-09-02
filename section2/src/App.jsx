import './App.css';
import Header from './components/Header';
import Body from './components/body';
import Footer from './components/Footer';

//클래스 컴포넌트도 있음 보통 함수로 만듬듬



// 함수 컴포넌트

/*
const Header = () =>{ 화살표 함수로도 가능
  return(
    <header>
      <h1>HEADER</h1>
    </header>
  )
}
*/




function App() {

  return ( //어떤 함수가 HTML태그를 리턴하고 있다면 그 함수는 리액트 컴포넌트이다
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  );
}

export default App;
