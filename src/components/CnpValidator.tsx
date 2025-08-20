
import CnpValidationForm from "./CnpValidationForm";
import cnp from "/assets/cnp-algoritm.png";


const CnpValidator = () => {
  return (
    <div className="max-w-[1300px] mx-auto pt-[10rem] font-primary">
      <div>
        <h1 className="text-center font-secondary text-3xl md:text-[42px]">
          Verificare CNP - Validare Cod Numeric Personal
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row gap-4 md:pl-6 px-4 mt-4 w-full">
        <div className="flex-1 w-full">
          <CnpValidationForm />
        </div>

        <div className="flex-1 flex flex-col gap-3 mt-2">
            <p>Acest tool vă va verifica CNP-urile dacă sunt scrise corect sau nu. Astfel, veți fi sigur că aveți de a face cu un <span className="font-bold">CNP corect.</span></p>
            <p>Orice cod numeric personal are 13 cifre. Pentru a fi valid, ultima cifră a CNP-ului, cunoscută și sub numele de <span className=" font-bold">cifra de control, </span> trebuie sa fie în acord cu restul cifrelor. Cifra de control se calculează utilizând un algoritm pe baza celorlalte cifre. Astfel, prin cifra de control ne asigurăm că cifrele anterioare au fost completate corect.</p>
            <p>Pentru orice CNP valid, programul va decodifica cifrele din el. Vei stii pe baza cnp-ului, ce <span className=" font-bold">sex, varsta, judet are persoana respectiva.</span></p>
        </div>
      </div>

      <div className="pt-12 px-4">
        <h2 className="font-secondary text-3xl">Validare CNP</h2>
         <div className="flex flex-col gap-4 pt-4">
            <p>Validarea oricărui CNP se realizează prin <span className=" font-bold">calcularea cifrei de control.</span> Dacă cifra de control calculată este egală cu cea specificată în CNP, atunci codul numeric personal este valid și corect.</p>
            <p>Algoritmul de calculare a cifrei de control folosește următoarele 12 cifre: 279146358279. Fiecare cifra din constantă este înmulțită cu cifra corespondentă din CNP. De exemplu, dacă prima cifră din CNP-ul persoanei este 1 (1 semnifică persoana de sex masculin născută între 1900-1999), aceasta este înmulțită cu prima cifră din constantă adică 2. Rezultatele înmulțirilor sunt însumate, iar numărul rezultat se împarte la 11.</p>
            <ul className="list-disc pl-8">
              <li>Dacă restul împărțirii este mai mic decât 10, atunci acel număr reprezintă cifra de control, cea de 13-a cifra a CNP-ului.</li>
              <li>În schimb, dacă restul împărțirii este 10, atunci cifra de control este 1.</li>
            </ul>
            <p>Să luăm de exemplu următorul CNP: 2990219469000. În cazul de față trebuie sa vedem dacă cifra de control pe care o calculam este egala cu 0. Dacă rezultatul nu este 0, atunci CNP-ul este incorect.</p>
            <p>Vom înmulți fiecare dintre primele 12 cifre ale CNP-ului cu valoarea constantă corespunzătoare.</p>
         </div>
      </div>

      <div className="pt-12 mx-auto">
        <img src={cnp} alt="CNP Algorithm" className="mx-auto" />
      </div>

      <div className="pt-8 px-4">
        <h2 className="font-secondary text-3xl max-w-[80%]">Ce semnifica fiecare cifra din CNP?</h2>

        <div className="mt-4">
          <div className="flex items-center p-2 border border-gray-300 rounded-tr-[5px] rounded-tl-[5px]">
            <p>Prima cifra reprezinta <span className=" font-bold">sexul persoanei si secolul </span> in care s-a nascut persoana.</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300 ">
            <p>A doua si a treia cifra reprezinta <span className=" font-bold">anul nasterii: </span> 1900 - 1999</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300">
            <p>A patra si a cincea cifra reprezinta <span className=" font-bold">luna nasterii:</span> 01 - 12</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300">
            <p>A sasea si a saptea cifra reprezinta <span className=" font-bold">ziua nasterii: </span> 01 - 31</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300">
            <p>A opta si a noua cifra reprezinta <span className=" font-bold">Județul de naștere: </span> 01 - 52</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300">
            <p>Urmatoarele 3 cifre reprezinta un cod serial ce este diferit pentru persoanele care s-a nascut in aceeasi zi si in acelasi judet (001-999)</p>
          </div>
          <div className="flex items-center p-2 border-b border-r border-l border-gray-300 rounded-br-[5px] rounded-bl-[5px]">
            <p>Ultima cifra reprezinta <span className=" font-bold">cifra de control, </span> aceasta este folosita pentru validarea cnp-ului.</p>
          </div>
        </div>
      </div>

       {/*  -- spaccer -- */}
      <div className="h-[8rem] w-full"></div>
    </div>
  )
}

export default CnpValidator
