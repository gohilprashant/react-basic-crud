import { Route, Routes } from 'react-router-dom';
import AddPost from '../pages/AddPost';
import Home from '../pages/Home';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts/add' element={<AddPost />} />
    </Routes>
  );
};

export default AppRouter;
