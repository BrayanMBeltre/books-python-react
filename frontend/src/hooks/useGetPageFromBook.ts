import { pageFormats } from "@/constant";
import api from "@/lib/axios";
import { TPage, TPageFormats } from "@/types";
import { useQuery } from "react-query";

type Props = {
  bookId?: string;
  pageId?: number;
  pageFormat?: TPageFormats;
};

const useGetPageFromBook = ({
  bookId,
  pageId,
  pageFormat = pageFormats[0],
}: Props) => {
  const pageData = useQuery<TPage>({
    queryKey: ["page", pageId, "book", bookId, "format", pageFormat],
    queryFn: async () =>
      await api(
        `/books/${bookId}/${
          pageId ? `pages/${pageId}/${pageFormat}` : `${pageFormat}`
        }`
      ),
    enabled: !!bookId,
  });

  return pageData;
};

export default useGetPageFromBook;
