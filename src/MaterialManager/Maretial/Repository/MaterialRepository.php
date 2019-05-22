<?php


namespace App\MaterialManager\Maretial\Repository;

use App\MaterialManager\Maretial\Entity\Material;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class MaterialRepository
 * @package App\MaterialManager\Maretial\Repository
 */
class MaterialRepository extends ServiceEntityRepository
{
    /**
     * MaterialRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Material::class);
    }
}