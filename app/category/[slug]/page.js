import CategoryPage from "@/components/Category/CategoryPage";
import { Container } from "@mui/material";
import Image from "next/image";

export default function Category({params}) {
  console.log(params)
  return (
    <Container maxWidth="xl"sx={{ height: "100vh"}}>
    <CategoryPage params={params}/>
    </Container>
  
  );
}
