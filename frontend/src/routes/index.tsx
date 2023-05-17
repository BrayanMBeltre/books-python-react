import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NotFoundPage from "./404";
import BookDetailsPage from "./BookDetails";
import BookPagePage from "./BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/book/:bookId/",
    element: <BookDetailsPage />,
  },
  {
    path: "/book/:bookId/page/:pageId/",
    element: <BookPagePage />,
  },
  {
    path: "/book/:bookId/page/:pageId/:format",
    element: <BookPagePage />,
  },
]);
