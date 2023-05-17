import api from "@/lib/axios";
import { TBook } from "@/types";
import { useQuery } from "react-query";

type Props = {
  bookId?: string;
};
const useGetBook = ({ bookId }: Props) => {
  const bookData = useQuery<TBook>({
    queryKey: ["book", bookId],
    queryFn: async () => await api(`/books/${bookId}`),
    enabled: !!bookId,
  });

  return bookData;
};

export default useGetBook;
