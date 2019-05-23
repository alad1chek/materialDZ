<?php


namespace App\Hydrator;


use App\Entity\Material;
use App\Repository\CategoryRepository;
use App\Repository\MaterialRepository;

class MaterialHydrator
{
    /**
     * @var MaterialRepository
     */
    private $materialRepository;

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    public function __construct(
        MaterialRepository $materialRepository,
        CategoryRepository $categoryRepository
    )
    {
        $this->materialRepository = $materialRepository;
        $this->categoryRepository = $categoryRepository;
    }

    public function hydrateNew(array $materialData): Material
    {
        $material = new Material();
        $material->setCategory(
            $this->categoryRepository->find($materialData['categoryId'])
        );
        $material->setCount($materialData['count']);
        $material->setName($materialData['name']);
        $material->setPrice($materialData['price']);

        return $material;
    }

    public function hydrateExist(Material $material, array $materialData): Material
    {
        $material->setCategory(
            $this->categoryRepository->find($materialData['categoryId'])
        );
        $material->setCount($materialData['count']);
        $material->setName($materialData['name']);
        $material->setPrice($materialData['price']);

        return $material;
    }
}