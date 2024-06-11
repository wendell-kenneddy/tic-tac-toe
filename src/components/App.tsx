import { Header } from "./Header";
import { Grid } from "./Grid";

export function App() {
  return (
    <>
      <Header />

      <main className="w-[90%] max-w-[500px] my-4 mx-auto bg-neutral-800 rounded-md p-4 flex flex-col items-center gap-4">
        <Grid />
      </main>
    </>
  );
}
