import api from "@/lib/axios";
import { TBook } from "@/types";
import { useQuery } from "react-query";

const useGetBooks = () => {
  const bookData = useQuery<Array<TBook>>({
    queryKey: ["book"],
    queryFn: async () => await api(`/books`),
  });

  return bookData;
};

export default useGetBooks;
