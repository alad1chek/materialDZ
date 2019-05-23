<?php


namespace App\Hydrator;


use App\Entity\Category;

class CategoryHydrator
{

    public function hydrateNew(array $categoryData): Category
    {
        $category = new Category();
        $category->setName($categoryData['name']);

        return $category;
    }

    public function hydrateExist(Category $category, array $categoryData): Category
    {
        $category->setName($categoryData['name']);
        return $category;
    }
}