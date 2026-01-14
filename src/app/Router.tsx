import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='*' element={<></>} />
    </Routes>
  );
};

export default Router;
