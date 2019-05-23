<?php


namespace App\Service;


use App\Entity\Material;
use App\Hydrator\MaterialHydrator;
use App\Repository\MaterialRepository;

/**
 * Class MaterialService
 * @package App\Service
 */
class MaterialService
{
    /**
     * @var MaterialRepository
     */
    private $repository;

    /**
     * @var MaterialHydrator
     */
    private $hydrator;

    /**
     * MaterialService constructor.
     * @param MaterialRepository $repository
     * @param MaterialHydrator $hydrator
     */
    public function __construct(
        MaterialRepository $repository,
        MaterialHydrator $hydrator
    )
    {
        $this->repository = $repository;
        $this->hydrator = $hydrator;
    }

    /**
     * @return \App\Entity\Material[]
     */
    public function getAllMaterials(): array
    {
        return $this->repository->findAll();
    }

    /**
     * @param Material $material
     */
    public function removeMaterial(Material $material)
    {
        $this->repository->remove($material);
    }

    /**
     * @param Material $material
     * @param array $data
     * @return Material
     */
    public function updateMaterial(Material $material, array $data): Material
    {
        $this->hydrator->hydrateExist($material, $data);
        $this->repository->update();

        return $material;
    }

    /**
     * @param array $data
     * @return Material
     */
    public function createMaterial(array $data)
    {
        return $this->repository->createMaterial(
            $this->hydrator->hydrateNew($data)
        );
    }
}