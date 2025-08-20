import CnpBox from "./CnpBox";

const CnpGenerator = () => {
  return (
    <div className="max-w-[1300px] mx-auto pt-[10rem] ">
      <div>
        <h1 className="text-center font-secondary text-3xl md:text-[42px]">
          Generator CNP - Codul Numeric Personal
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 md:pl-6 mt-4">
        {/* <div className="flex-1 border"> */}
            <CnpBox/>
        {/* </div> */}
        <div className="flex-1 flex flex-col gap-3 mt-4">
          <p className="max-w-[40rem]">
            Acest program gratuit va genera CNP-uri valide ce pot fi folosite în
            formulare.
          </p>
          <p className="max-w-[40rem]">
            CNP-ul este un număr format din 13 cifre, care este unic pentru
            fiecare persoană. Codul numeric personal are următorul format:
            SYYMMDDJJNNNC
          </p>
          <p className="max-w-[40rem]">
            <span className="font-primary">
              Prima cifra determină sexul persoanei,{" "}
            </span>{" "}
            secolul în care este născută și dacă este rezidentă sau nu.
          </p>
          <ul className="list-disc pl-6">
            <li>
              cifra 1 semnifică persoana de{" "}
              <span className="font-primary">sex masculin </span> născută între
              anii <span className="font-primary">1900-1999</span>
            </li>
            <li>
              cifra 2 semnifică persoana de{" "}
              <span className="font-primary">sex feminin </span> născută între
              anii <span className="font-primary">1900-1999</span>
            </li>
            <li>
              cifra 3 semnifică persoana de{" "}
              <span className="font-primary">sex masculin </span> născută în{" "}
              <span className="font-primary">secolul 19</span>
            </li>
            <li>
              cifra 4 semnifică persoana de{" "}
              <span className="font-primary">sex feminin </span> născută în{" "}
              <span className="font-primary">secolul 19</span>
            </li>
            <li>
              cifra 5 semnifică persoana de{" "}
              <span className="font-primary">sex masculin </span> născută în{" "}
              <span className="font-primary">secolul 21 (după anii 2000)</span>
            </li>
            <li>
              cifra 5 semnifică persoana de{" "}
              <span className="font-primary">sex feminin </span> născută în{" "}
              <span className="font-primary">secolul 21 (după anii 2000)</span>
            </li>
            <li>
              cifra 7 semnifică persoana rezidentă de sex masculin (CNP acordat
              străinilor)
            </li>
            <li>
              cifra 8 semnifică persoana rezidentă de sex feminin (CNP acordat
              străinilor)
            </li>
          </ul>

          <p>
            Următoarele 6 cifre reprezintă anul, luna și ziua în care este
            născută persoana.
          </p>
          <p>
            A 8-a și a 9-a cifră identifică județul sau sectorul în care a fost
            născută persoana respectivă.
          </p>
          <p>
            A 10-a, a 11-a și a 12-a cifră reprezintă un cod secvențial, între
            001 și 999, ce este acordat persoanelor de același sex născute în
            aceeași zi și în același județ. De exemplu, primul băiat născut
            într-o zi într-un anumit județ va primi primul numărul: 001.
          </p>
          <p>
            Ultima cifră reprezintă o{" "}
            <span className="font-primary">cifră de control </span> care
            validează că cifrele anterioare au fost scrise corect. În cazul în
            care o persoană va introduce greșit CNP-ul într-un formular, această
            validare va indica acest lucru. Această cifră de control se
            calculează utilizând un algoritm pe baza celorlalte cifre.
          </p>
        </div>
      </div>

      <div className="pt-12 p-4">
        <h2 className="font-secondary text-3xl">Generator De Coduri CNP</h2>
        <div className="flex flex-col gap-4 pt-4">
          <p>
            Un CNP, cunoscut și sub numele de{" "}
            <span className="font-primary">cod numeric personal, </span> este
            folosit pentru{" "}
            <span className="font-primary">identificarea persoanelor.</span>
          </p>
          <p>
            Statul roman și alte instituții și organizații folosesc CNP-urile
            pentru identificarea oamenilor. Pentru a avea acces la anumite
            servicii, ai nevoie de un CNP. De aceea, este folositor un generator
            de coduri numerice personale.
          </p>
          <p>
            Toate CNP-urile generate aleatoriu de acest program sunt pentru
            persoane de peste 18 ani. Dacă introduci manual o dată mai mică,
            poți să generezi CNP-uri pentru persoane minore.
          </p>
          <p>
            Pentru a obține un CNP real, primul pas este obținerea
            <span className="font-primary">
              certificatului de naștere.{" "}
            </span>{" "}
            Certificatul de naștere este un document oficial care dovedește data
            nașterii unei persoane. Certificatul de naștere va{" "}
            <span className="font-primary">
              sta la baza tuturor celorlalte documente,{" "}
            </span>{" "}
            inclusiv a CNP-urilor.
          </p>
        </div>
      </div>

      <div className="pt-8 p-4">
        <h2 className="font-secondary text-3xl">
          Utilizări Pentru Codurile Numerice Personale
        </h2>
        <div className="flex flex-col gap-4 pt-4">
            <p>Un program care generează coduri numerice personale poate fi folositor în diverse scopuri, cum ar fi:</p>
            <ul className="list-disc pl-8">
                <li><span className="font-primary">Generarea de date de test pentru aplicații software: </span> Un program care generează CNP-uri valide poate fi folosit pentru a genera date de test pentru diverse aplicații software care folosesc CNP-ul ca identificator unic al utilizatorilor. Acest lucru poate ajuta la verificarea funcționalităților aplicației și la identificarea eventualelor erori.</li>
                <li>
                    <span className="font-primary">Crearea de exemple în documentații sau tutoriale:</span> Un program care generează CNP-uri poate fi util în crearea de exemple în documentații sau tutoriale care tratează subiecte legate de CNP-uri si de verificarea identității. Acest lucru poate facilita înțelegerea conceptelor prezentate fără folosirea unui CNP real. În general documentele care prezintă un exemplu folosesc CNP-uri valide, dar care nu sunt ale nimănui.
                </li>
                <li>
                    <span className="font-primary">Generarea de CNP-uri pentru persoane fictive:</span> Un program care generează CNP-uri poate fi util în crearea de persoane fictive pentru scopuri de divertisment sau pentru simularea unor situații în care se dorește să se creeze un grup de persoane cu caracteristici precise.
                </li>
            </ul>
        </div>
      </div>

      {/*  -- spaccer -- */}
      <div className="h-[8rem] w-full"></div>
    </div>
  );
};

export default CnpGenerator;
