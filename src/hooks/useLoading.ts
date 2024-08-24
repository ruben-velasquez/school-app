import { useAppSelector } from "@/redux/hooks";

export const useLoading = () => useAppSelector((state) => state.loading.value)