import Home from './pages/Home';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/Dev-Portfolio' element={<Home />} />
				<Route path='/Dev-Portfolio/projects' element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
