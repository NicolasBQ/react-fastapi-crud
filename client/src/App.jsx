import { Header } from "./Header";
import { CreateForm } from "./CreateForm";
import { BooksTable } from "./BooksTable";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-center gap-4">
        <CreateForm />
        <BooksTable />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
