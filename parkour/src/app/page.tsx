import Translator from "@/app/ui/translator";

export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-2">Parkour Translator</h1>
        
        <p className="mb-4">
          Translate your text into parkour.
        </p>
        
        <Translator />
        
        <p className="mt-4">
          Created by <a href="https://twitter.com/fokkos2" className="text-blue-500">James March</a> 2024
        </p>
      </div>

      </main>
    </div>
  );
}
