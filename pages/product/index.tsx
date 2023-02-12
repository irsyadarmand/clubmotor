import Filters from "@/components/Filter";
import AppLayout from "@/components/layouts/App";
import ProductCard from "@/components/Product";
import { useLazyGetPostsQuery } from "@/core/redux/slices/posts/queries";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Product: NextPage = () => {
  const router = useRouter();
  const [trigger, { isLoading, data, isFetching }] = useLazyGetPostsQuery();
  useEffect(() => {
    trigger(router.query.category as string);
  }, [router.query]);
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto pt-18 pb-24">
        <section>
          <div className="px-4 sm:px-6 lg:px-8 py-8 pt-20">
            <div className="md:grid grid-cols-4 mt-4 gap-8">
              <Filters />
              <div className="col-span-3 pt-10 md:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
                {data &&
                  !isLoading &&
                  !isFetching &&
                  data.map((product) => (
                    <ProductCard data={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Product;
