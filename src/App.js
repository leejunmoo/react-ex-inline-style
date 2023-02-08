import logo from './logo.svg';
import './App.css';
import pokemon from './images/000401.png';
/* 소수의 중요한 이미지는 css파일이아닌 이렇게 직접 import 해서 불러놓기도함 ex)로고, 파비콘 등 */


function App() {
  let btnstyle = {
    backgroundColor: '#4caf50',
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px"
  }
  let name= '둘리';
  let address = '쌍문동';
  let userInfo = {
    name: '둘리',
    address: '쌍문동'
  }

  const 함수 = () => {
    alert('함수 실행');
  }

  return (
    <>
    {/* <img src={pokemon} /> */}
    <div style={{
      backgroundImage: `url(${pokemon})`,
      width: '400px',
      heigth: '400px'
    }}>images??</div>
      <p>{userInfo.name}는 {userInfo.address}에 삽니다.</p>
      <button onClick={함수} style={btnstyle}>버튼: 함수실행</button>
      <div className='main-bg'>
        main-bg
      </div>
    </>
  )
}

export default App;
