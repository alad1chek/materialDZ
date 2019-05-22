<?php


namespace App\MaterialManager\Log\Entity;

use App\MaterialManager\Maretial\Entity\Material;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="log_record")
 */
class LogRecord
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var Material
     * @ORM\ManyToOne(targetEntity="App\MaterialManager\Maretial\Entity\Material")
     * @ORM\JoinColumn(name="materialId", referencedColumnName="id")
     */
    private $material;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     */
    private $count;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime")
     */
    private $createAt;
    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $reason;
}