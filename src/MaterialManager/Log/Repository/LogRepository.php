<?php

namespace App\MaterialManager\Log\Repository;

use App\MaterialManager\Log\Entity\LogRecord;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class LogRepository
 * @package App\MaterialManager\Log\Repository
 */
class LogRepository extends ServiceEntityRepository
{
    /**
     * LogRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, LogRecord::class);
    }
}