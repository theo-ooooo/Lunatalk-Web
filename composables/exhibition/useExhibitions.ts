import { exhibitionService } from "~/services/exhibition.service";

export const useExhibitions = () => {
  const { data, pending, error } = useAsyncData("exhibitions", () =>
    exhibitionService.getExhibitions(),
  );

  const exhibitions = computed(() => {
    return data.value?.data?.map((exhibition) => {
      return {
        ...exhibition,
        products: exhibition.products.map(({ product }) => {
          return {
            ...product,
            thumbnailImage: product.images?.find(
              ({ imageType }: { imageType: string }) => imageType === "PRODUCT_THUMBNAIL",
            ),
          };
        }),
      };
    });
  });

  return {
    exhibitions,
    pending,
    error,
  };
};
