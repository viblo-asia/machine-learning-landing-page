//
export const post_id = 0

export const content =
`
## What is new \cursor\` method in query builder?

Since Laravel have been upgraded to support **PHP 5.6+** only, a new way of fetching database query results was introduced: \`cursor\`.

The new approach uses generator to iterate over query result resource and gives the resulting models right away to \`foreach\` loop.

The difference between new method is that models are not filled into collection and destructed right after being used in the loop iteration.

![Laravel_cursor_img1.jpeg](/uploads/ab6e493c-d656-4959-b6a9-c28a24ce41d3.jpeg)

*Figure 1: Memory consumption in standard approach*

![Laravel_cursor_img4.jpeg](/uploads/2e509389-80dd-4b2f-94d2-a6809ec69776.jpeg)

*Figure 2: Memory saving with using cursor*

## How about eager loading?

The problem is that in a lot of cases models are being fetched with needed related instances. When we iterate over models collection without preloaded relation, the **N+1** problem appears: every iteration causes new queries to database in order to load relations.

Laravel provides a good way of [eager loading relations](https://laravel.com/docs/5.3/eloquent-relationships#eager-loading) for such cases... which, unfortunately, doesn't work with cursor method. The generator does not load all models into memory, so it cannot get the summary of foreign keys needed to load relations.

![Laravel_cursor_img2.jpeg](/uploads/42299701-1f33-49b2-990e-29e4e53bb049.jpeg)

*Figure 3: Default eager load schema*

![Laravel_cursor_img5.jpeg](/uploads/1bf318b8-665d-4252-a762-14b9d0ea904c.jpeg)

*Figure 4: N+1 problem in cursor usage*

## But is eager loading is so good?

Imagine a big set of models with several relations being preloaded. Every model would contain included models and collections and every of them will consume your server resources.

E. g.: 200 posts with 100 users and 50 categories preloaded = 350 models for a single purpose.

Although relations are very easy to use, such issues can bring a lot of problems on high-loaded projects and even if relations are loaded only with some columns, memory leaks will appear anyway, because every model is a constructed object.

![Laravel_cursor_img3.jpeg](/uploads/25e237eb-9b09-4770-930f-19685fc59d48.jpeg)

*Figure 5: Memory leak in eager loading*

The only way to deal with that is to load relations not with separate queries, but by joining tables with selecting only required columns. And here cursor gives it advantage again.

![Laravel_cursor_img6.jpeg](/uploads/f31f28a0-9d8a-4bfa-92cb-637a812e8763.jpeg)

*Image 6: Loading relation by join query with cursor*

## Pagination solution

Another issue is that cursor cannot support pagination by current implementation as \`paginate\` method uses regular way to get results. But a very simple workaround can be done for that: resolve count by default query and construct paginator manually.

\`\`\`php
public function paginate($query, $perPage = null, array $columns = ['*'])
{
    $base = $query instanceof EloquentBuilder ? $query->toBase() : $query;
    $total = $base->getCountForPagination($columns);

    $query->forPage(
        $page = Paginator::resolveCurrentPage(),
        $perPage = $perPage ?: $this->get('perPage', 10)
    );

    return new LengthAwarePaginator([], $total, $perPage, $page, [
        'path' => Paginator::resolveCurrentPath(),
    ]);
}
\`\`\`

## Summary

Laravel introduced a very good way to avoid unnecessary memory consumption. The new approach can be used both with regular apps and APIs and in combination with well-structured queries give significant performance improvements for your products.
`
