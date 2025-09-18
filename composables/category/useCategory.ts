import { categoryService } from "~/services/category.service";

export const useCategory = () => {
  const { data, pending, error } = useAsyncData("categories", () =>
    categoryService.getCategories(),
  );

  const categories = computed(() => data.value?.data ?? []);

  return {
    categories,
    pending,
    error,
  };
};
