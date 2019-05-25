<?php


namespace App\Model;


class SpendingModel
{
    private $spending;

    public function __construct(array $sending)
    {
        $this->spending = $sending;
    }

    public function getReason(): string
    {
        return $this->spending['reason'] ?? '';
    }

    public function getMaterials(): array
    {
        return $this->spending['materials'] ?? [];
    }
}