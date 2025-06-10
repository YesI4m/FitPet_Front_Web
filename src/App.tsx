import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Container from 'layouts/Container';
import { MAIN_PATH } from 'constant';


// component : App 컴포넌트트//
function App() {
 
  // render : App 컴포넌트 렌더링 //
  return (
    

      <Routes>
        <Route element={<Container />} >
        <Route path = { MAIN_PATH() } element={<Main />} />

        <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>

    
    
  )
}

export default App
