<?php


namespace App\Controller\Api\Category;


use App\Entity\Category;
use App\Service\CategoryService;
use App\Transformer\CategoryTransformer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class CategoryController extends AbstractController
{
    /**
     * @Route("/categories", name="category_list")
     * @param CategoryTransformer $transformer
     * @param CategoryService $service
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function list(
        CategoryTransformer $transformer,
        CategoryService $service
    )
    {
        return $this->json($transformer->transformMany($service->getAllCategories()));
    }

    /**
     * @Route(
     *     "/category/{category}",
     *     name="category_show",
     *     methods={"GET"}
     * )
     * @param CategoryTransformer $transformer
     * @param Category $category
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function show(
        CategoryTransformer $transformer,
        Category $category
    )
    {
        return $this->json($transformer->transform($category));
    }

    /**
     * @Route(
     *     "/category",
     *     methods={"POST"},
     *     name="category_create"
     * )
     * @param Request $request
     * @param CategoryService $service
     * @param CategoryTransformer $transformer
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function create(
        Request $request,
        CategoryService $service,
        CategoryTransformer $transformer
    )
    {
        return $this->json($transformer->transform(
            $service->createCategory(json_decode($request->getContent(), true))
        ));
    }

    /**
     * @Route(
     *     "/category/{category}",
     *     methods={"DELETE"},
     *     name="category_delete"
     * )
     * @param CategoryService $service
     * @param Category $category
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function delete(
        CategoryService $service,
        Category $category
    )
    {
        $service->removeCategory($category);

        return $this->json([
            'status' => 'ok'
        ]);
    }

    /**
     * @Route(
     *     "/category/{category}",
     *     methods={"PUT"},
     *     name="category_update"
     * )
     * @param Request $request
     * @param CategoryService $service
     * @param CategoryTransformer $transformer
     * @param Category $category
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function update(
        Request $request,
        CategoryService $service,
        CategoryTransformer $transformer,
        Category $category
    )
    {
        return $this->json($transformer->transform($service->updateCategory(
            $category,
            json_decode($request->getContent(), true)
        )));
    }
}