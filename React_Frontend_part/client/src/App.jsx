import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateRecipe from './pages/CreateRecipe';
import EditRecipe from './pages/EditRecipe';
import DeleteRecipe from './pages/DeleteRecipe';
import FoodListPage from './pages/FoodListPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FoodListPage/>}/>
          <Route path='/create-recipe' element={<CreateRecipe/>}/>
          <Route path='/edit-recipe/:id' element={<EditRecipe/>}/>
          <Route path='/delete-recipe' element={<DeleteRecipe/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>

      

      
    </div>
  );
};

export default App;