import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookACall from "./pages/BookACall";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-a-call" element={<BookACall />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
