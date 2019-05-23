<?php


namespace App\Transformer;


use App\Entity\Material;

class MaterialTransformer
{
    public function transform(Material $material)
    {
        return [
            'id'         => $material->getId(),
            'name'       => $material->getName(),
            'count'      => $material->getCount(),
            'createAt'   => $material->getCreateAt()->getTimestamp(),
            'category'   => $material->getCategory()->getName(),
            'categoryId' => $material->getCategory()->getId(),
            'price'      => $material->getPrice()
        ];
    }

    public function transformMany(array $materials)
    {
        return array_map(function (Material $material) {
            return $this->transform($material);
        }, $materials);
    }
}