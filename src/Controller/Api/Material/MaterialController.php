<?php


namespace App\Controller\Api\Material;

use App\Entity\Material;
use App\Hydrator\MaterialHydrator;
use App\Service\MaterialService;
use App\Transformer\MaterialTransformer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class MaterialController extends AbstractController
{
    /**
     * @Route("/materials", name="material_list")
     * @param MaterialTransformer $transformer
     * @param MaterialService $service
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function list(
        MaterialTransformer $transformer,
        MaterialService $service
    )
    {
        return $this->json($transformer->transformMany($service->getAllMaterials()));
    }

    /**
     * @Route(
     *     "/material/{material}",
     *     name="material_show",
     *     methods={"GET"}
     * )
     * @param MaterialTransformer $transformer
     * @param Material $material
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function show(
        MaterialTransformer $transformer,
        Material $material
    )
    {
        return $this->json($transformer->transform($material));
    }

    /**
     * @Route(
     *     "/material",
     *     methods={"POST"},
     *     name="material_create"
     * )
     * @param Request $request
     * @param MaterialService $service
     * @param MaterialTransformer $transformer
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function create(
        Request $request,
        MaterialService $service,
        MaterialTransformer $transformer
    )
    {
        return $this->json($transformer->transform($service->createMaterial(json_decode($request->getContent(), true))));
    }

    /**
     * @Route(
     *     "/material/{material}",
     *     methods={"DELETE"},
     *     name="material_delete"
     * )
     * @param MaterialService $service
     * @param Material $material
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function delete(
        MaterialService $service,
        Material $material
    )
    {
        $service->removeMaterial($material);

        return $this->json([
            'status' => 'ok'
        ]);
    }

    /**
     * @Route(
     *     "/material/{material}",
     *     methods={"PUT"},
     *     name="material_update"
     * )
     * @param Request $request
     * @param MaterialService $service
     * @param MaterialTransformer $transformer
     * @param Material $material
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function update(
        Request $request,
        MaterialService $service,
        MaterialTransformer $transformer,
        Material $material
    )
    {
        return $this->json($transformer->transform($service->updateMaterial(
            $material,
            json_decode($request->getContent(), true)
        )));
    }
}