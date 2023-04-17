import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing';
import Dashboard from './routes/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
