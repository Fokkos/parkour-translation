import Translator from "@/app/ui/translator";
import Alert from "./ui/alert";

export default function Home() {


  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-2">Parkour Translator</h1>
        
        <p className="mb-4">
          Translate your text into parkour.
        </p>
        
        <Translator />
        
        <p className="mt-4">
          Based on translation by <a href="https://twitter.com/sdslayer100" className="text-blue-500">@sdslayer100</a>
        </p>
        <p>
          Created by <a href="https://twitter.com/fokkos2" className="text-blue-500">James March</a> 2024
        </p>
      </div>
      
      <Alert/>
      </main>
    </div>
  );
}
