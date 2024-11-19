import './App.css';
import LogoIcon from './images/cb-icon.png'

function App() {
  return (
    <div className="bg-dark d-flex align-items-center justify-content-center" style={{width: "100vw", height: "100vh"}}>
      <div className='w-50 h-75 d-flex align-items-center justify-content-center'>
        <form className='w-50 h-50'>
          <div className='w-100 d-flex align-items-center justify-content-center' style={{marginBottom:'35px'}}><img className='img-fluid' src={LogoIcon}/></div>
          <h1 className='fs-6 text-light'>Login here</h1>
          <div>
            <input className='w-100' placeholder='Email'/>
            <input className='w-100' placeholder='Senha'/>
          </div>
          <button type="button" className="btn btn-primary w-100" style={{marginTop: '10px'}} >Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
