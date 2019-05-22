<?php


namespace App\MaterialManager\Maretial\Entity;

use App\MaterialManager\Category\Entity\Category;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="material")
 */
class Material
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(type="integer")
     */
    private $count;

    /**
     * @var string
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @var Category
     * @ORM\ManyToOne(targetEntity="App\MaterialManager\Category\Entity\Category", inversedBy="materials")
     * @ORM\JoinColumn(name="categoryId", referencedColumnName="id")
     */
    private $category;
}