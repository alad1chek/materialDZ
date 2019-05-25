<?php


namespace App\Service;


use App\Entity\LogRecord;
use App\Model\SpendingModel;
use App\Repository\LogRecordRepository;
use App\Repository\MaterialRepository;

class SpendingService
{
    /***
     * @var LogRecordRepository
     */
    private $logRecordRepository;

    /**
     * @var MaterialRepository
     */
    private $materialRepository;

    /**
     * SpendingService constructor.
     * @param LogRecordRepository $logRecordRepository
     * @param MaterialRepository $materialRepository
     */
    public function __construct(
        LogRecordRepository $logRecordRepository,
        MaterialRepository $materialRepository
    )
    {
        $this->logRecordRepository = $logRecordRepository;
        $this->materialRepository = $materialRepository;
    }

    public function spendingProcess(SpendingModel $model)
    {
        array_map(function (array $spend) use (&$logs, $model){
            $log = new LogRecord();
            $material = $this->materialRepository->find($spend['id']);
            $material->minusCount($spend['count']);
            $log->setMaterial($material);
            $log->setReason($model->getReason());
            $this->logRecordRepository->persist($log);
        }, $model->getMaterials());
        $this->logRecordRepository->flush();
    }
}