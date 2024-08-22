import { useEffect } from "react";
import { Header } from "./Header";
import { CreateForm } from "./CreateForm";
import { BooksTable } from "./BooksTable";

const App = () => {
  useEffect(() => {
    const connect_to_server = async () => {
      try {
        const connect = await fetch('http://127.0.0.1:8000');

        console.log(connect);
      } catch(err) {
        console.log(`Error: ${err}`)
      }
    }

    connect_to_server();
  })

  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-center gap-4">
        <CreateForm />
        <BooksTable />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
