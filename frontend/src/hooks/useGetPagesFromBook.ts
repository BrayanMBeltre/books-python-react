import { pageFormats } from "@/constant";
import api from "@/lib/axios";
import { TPage, TPageFormats } from "@/types";
import { useQuery } from "react-query";

type Props = {
  bookId?: string;
  pageFormat?: TPageFormats;
};

const useGetPagesFromBook = ({
  bookId,
  pageFormat = pageFormats[0],
}: Props) => {
  const pageData = useQuery<Array<TPage>>({
    queryKey: ["pagesFrom", bookId, "format", pageFormat],
    queryFn: async () => await api(`/books/${bookId}/pages/${pageFormat}`),
    enabled: !!bookId,
  });

  return pageData;
};

export default useGetPagesFromBook;
