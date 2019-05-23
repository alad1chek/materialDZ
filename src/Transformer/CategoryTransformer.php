<?php

namespace App\Transformer;

use App\Entity\Category;

class CategoryTransformer
{
    public function transform(Category $category)
    {
        return [
            'id'         => $category->getId(),
            'name'       => $category->getName(),
        ];
    }

    public function transformMany(array $categories)
    {
        return array_map(function (Category $category) {
            return $this->transform($category);
        }, $categories);
    }
}