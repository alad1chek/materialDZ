<?php


namespace App\Transformer;

use App\Entity\LogRecord;

class LogRecordTransformer
{
    public function transform(LogRecord $record)
    {
        return [
            'id' => $record->getId(),
            'createAt' => $record->getCreateAt()->getTimestamp(),
            'reason' => $record->getReason(),
            'materialId' => $record->getMaterial()->getId()
        ];
    }

    public function transformMany(array $logs)
    {
        return array_map(function (LogRecord $record) {
            return $this->transform($record);
        }, $logs);
    }
}