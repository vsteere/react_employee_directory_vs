import logo from './logo.svg';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
	useEffect(() => {
		axios
			.get("https://randomuser.me/api/?results=10&nat=us")
			.then((response) => {
				setEmployees([...response.data.results]);
				//localStorage.setItem('employees_ls', JSON.stringify([...response.data.results]));
				console.log(employees);
			});
	}, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




export default App;
