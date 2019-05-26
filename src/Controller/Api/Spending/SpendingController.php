<?php

namespace App\Controller\Api\Spending;

use App\Entity\Material;
use App\Model\SpendingModel;
use App\Service\SpendingService;
use App\Transformer\LogRecordTransformer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class SpendingController extends AbstractController
{
    /**
     * @Route(
     *     "/spending",
     *     name="spending_post",
     *     methods={"POST"}
     * )
     * @param SpendingService $service
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function spending(
        SpendingService $service,
        Request $request
    ){
        $service->spendingProcess(new SpendingModel(json_decode($request->getContent(), true)));

        return $this->json([
            'status' => 'ok'
        ]);
    }

    /**
     * @Route(
     *     "/material/{material}/spending",
     *     name="spending_list",
     *     methods={"GET"}
     * )
     * @param LogRecordTransformer $transformer
     * @param Material $material
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function list(
        LogRecordTransformer $transformer,
        Material $material
    ){
        return $this->json($transformer->transformMany($material->getLogRecords()->toArray()));
    }
}
