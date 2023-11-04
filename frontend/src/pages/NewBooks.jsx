import { Box, Center } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

export default function NewBookPage() {
  return (
    <Center background="linear-gradient(to top, #051937, #2d4b62, #64818b, #a7b9b9, #eff2f1)">
      <Box>
        <BookForm />
      </Box>
    </Center>
  );
}
