<?php

namespace App\Repository;

use App\Entity\LogRecord;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method LogRecord|null find($id, $lockMode = null, $lockVersion = null)
 * @method LogRecord|null findOneBy(array $criteria, array $orderBy = null)
 * @method LogRecord[]    findAll()
 * @method LogRecord[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LogRecordRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, LogRecord::class);
    }

    public function persist(LogRecord $logRecord)
    {
        $this->getEntityManager()->persist($logRecord);
    }

    public function flush()
    {
        $this->getEntityManager()->flush();
    }
}
