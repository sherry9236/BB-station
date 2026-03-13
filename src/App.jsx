import { RouterProvider } from 'react-router';
import { router } from './router';
import './assets/all.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
