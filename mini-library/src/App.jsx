import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import BookmarksPage from "./pages/BookmarksPage/BookmarksPage";
import SingleBookPage from "./pages/SingleBookPage/SingleBookPage";

function App() {
	const router = createBrowserRouter([
		{
			path : '/',
			element : <LibraryPage />
		},
		{
			path : '/bookmarks',
			element : <BookmarksPage />
		},
		{
			path : '/books/:id',
			element : <SingleBookPage />
		}
	]);

	return (
		<div className="app">
			<RouterProvider router={ router } />
		</div>
	)
}

export default App;
