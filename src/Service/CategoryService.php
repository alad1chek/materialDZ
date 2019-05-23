<?php


namespace App\Service;


use App\Entity\Category;
use App\Hydrator\CategoryHydrator;
use App\Repository\CategoryRepository;

class CategoryService
{
    /**
     * @var CategoryRepository
     */
    private $repository;

    /**
     * @var CategoryHydrator
     */
    private $hydrator;


    public function __construct(
        CategoryRepository $repository,
        CategoryHydrator $hydrator
    )
    {
        $this->repository = $repository;
        $this->hydrator = $hydrator;
    }

    /**
     * @return Category[]
     */
    public function getAllCategories(): array
    {
        return $this->repository->findAll();
    }

    /**
     * @param Category $category
     */
    public function removeCategory(Category $category)
    {
        $this->repository->remove($category);
    }

    /**
     * @param Category $category
     * @param array $data
     * @return Category
     */
    public function updateCategory(Category $category, array $data): Category
    {
        $this->hydrator->hydrateExist($category, $data);
        $this->repository->update();

        return $category;
    }

    /**
     * @param array $data
     * @return Category
     */
    public function createCategory(array $data): Category
    {
        return $this->repository->create(
            $this->hydrator->hydrateNew($data)
        );
    }
}