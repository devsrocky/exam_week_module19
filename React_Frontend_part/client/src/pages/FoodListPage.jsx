import React from 'react';
import MasterLayout from '../component/MasterLayout';
import RecipeList from './../component/RecipeList';

const FoodListPage = () => {
    return (
        <MasterLayout>
            <RecipeList/>
        </MasterLayout>
    );
};

export default FoodListPage;