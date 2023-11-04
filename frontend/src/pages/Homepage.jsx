import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <SimpleGrid
      spacing={2}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      background="linear-gradient(to top, #051937, #2d4b62, #64818b, #a7b9b9, #eff2f1)"
    >
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </SimpleGrid>
  );
}
