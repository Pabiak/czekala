/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import { FaArrowUp } from 'react-icons/fa6';
import {
  BsBook,
  BsClockHistory,
  BsEasel,
  BsJournalBookmarkFill,
  BsMic,
  BsCardChecklist,
  BsLinkedin,
  BsEnvelopeFill,
  BsTelephoneFill,
} from 'react-icons/bs';
import { info } from '../info';

export default function Home() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { linkedIn, email, phone } = info;

  return (
    <>
      <svg width='0' height='0'>
        <linearGradient id='gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#3a7fae' offset='0%' />
          <stop stopColor='#92cf57' offset='100%' />
        </linearGradient>
      </svg>
      <div
        className='z-10 flex fixed items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] bg-gradient-to-t from-darkGreen to-lightBlue rounded-[50%] bottom-3 right-2 hover:cursor-pointer'
        onClick={() => scrollToTop()}
      >
        <button type='button' className='text-white text-lg md:text-3xl'>
          <FaArrowUp />
        </button>
      </div>
      <header className='flex flex-col gap-8 bg-header bg-blend-darken bg-blend-darken-color bg-cover bg-center bg-no-repeat w-full h-full clipPath-header pt-8 lg:flex-row lg:pt-16'>
        <div className='font-poppins lg:w-[35%] lg:ml-[7rem]'>
          <div>
            <h1 className='flex flex-col text-5xl font-bold text-center mt-10 md:text-7xl lg:text-start'>
              <span>Ekspert w</span>
              <span className='relative'>
                <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-[22rem] before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 md:before:w-[33rem]'></span>
                <span className='relative px-4 lg:p-0'>ekologicznym</span>
              </span>
              <span>postępie</span>
            </h1>
            <h2 className='text-center my-4 font-thin md:text-2xl lg:text-start'>
              Zbudujmy razem przyszłość
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-center lg:justify-end lg:w-[65%]'>
          <img
            src={'/wojciech-header.png'}
            alt='Zdjęcie przedstawiające profesora Czekałę'
            width={700}
            height={700}
            className='object-contain'
          />
        </div>
      </header>

      <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-7 lg:-rotate-[1.4deg] mb-10 md:-mt-11' />
      <section>
        <div className='grid grid-cols-2 place-items-center gap-10 my-14 md:my-[5rem] lg:grid-cols-3'>
          <div className='flex flex-col items-center'>
            <BsClockHistory
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl text-center'>
              15 lat
            </span>
            <span className='md:text-2xl text-center'>doświadczenia</span>
          </div>
          <div className='flex flex-col items-center'>
            <BsCardChecklist
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl text-center'>+100</span>
            <span className='md:text-2xl text-center'>
              projektów komercyjnych
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <BsEasel
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl text-center'>
              +2000 h
            </span>
            <span className='md:text-2xl text-center'>szkoleń i wykładów</span>
          </div>
          <div className='flex flex-col items-center'>
            <BsBook
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl text-center'>+170</span>
            <span className='md:text-2xl text-center'>prac twórczych</span>
          </div>
          <div className='flex flex-col items-center'>
            <BsJournalBookmarkFill
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl text-center'>+50</span>
            <span className='max-w-[10rem] text-center md:text-2xl md:max-w-[13rem] '>
              artykułów na liście filadelfijskiej
            </span>
          </div>
          <div className='flex flex-col items-center'>
            <BsMic
              className='text-6xl mb-2 md:text-8xl'
              style={{ fill: 'url(#gradient)' }}
            />
            <span className='font-semibold md:text-2xl'>+80</span>
            <span className='max-w-[10rem] text-center md:text-2xl'>
              prelekcji na konferencjach
            </span>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg]' />
      <section id='o-mnie' className='my-14'>
        <h1 className='text-2xl text-center font-bold md:text-4xl'>
          <span className='relative'>
            <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[140%]'></span>
            <span className='relative px-4 lg:p-0 inline-block'>O mnie</span>
          </span>
        </h1>
        <div className='mt-10 grid gap-y-6 grid-cols-1 place-items-center lg:grid-cols-2 '>
          <div className='text-center lg:max-w-[35rem] lg:text-left lg:order-1 p-4'>
            <span className='relative font-bold text-xl'>
              <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[120%] lg:before:m-2'></span>
              <h2 className='relative px-4 lg:p-0 inline-block mb-5 lg:m-2 '>
                Obszary zainteresowania
              </h2>
            </span>
            <p className='text-justify'>
              Jestem naukowcem, dydaktykiem oraz praktykiem pracującym w
              obszarach gospodarki odpadami, energetyki, energii odnawialnej,
              produkcji biopaliw, zrównoważonego rozwoju, gospodarki o obiegu
              zamkniętym oraz szeroko rozumianej ochrony i kształtowania
              środowiska. Istotnym elementem mojej działalności jest również
              edukacja środowiskowa i popularyzacja wiedzy. W 2023 roku, w wieku
              36 lat, za wybitne osiągnięcia naukowe oraz całokształt dorobku
              uzyskałem tytuł Profesora w dziedzinie Nauk
              Inżynieryjno-technicznych w dyscyplinie Inżynieria Środowiska,
              Górnictwo i Energetyka.
            </p>
          </div>
          <div className='p-4 w-full grid place-items-center lg:order-2'>
            <div className='relative px-4 flex items-center justify-center'>
              <img
                src={'/czekala1.jpg'}
                alt='Zdjęcie przedstawiające Profesora Czekałę'
                width={550}
                height={550}
                className='rounded-lg drop-shadow-2xl'
              />
            </div>
          </div>
          <div className='text-center lg:max-w-[35rem] lg:text-left lg:order-4 p-4'>
            <span className='relative font-bold text-xl'>
              <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[120%] lg:before:m-2'></span>
              <h2 className='relative px-4 lg:p-0 inline-block mb-5 lg:m-2'>
                Działalność naukowa
              </h2>
            </span>
            <p className='text-justify'>
              Napisałem lub pracowałem jako współautor przy ponad 170
              publikacjach naukowych, w tym ponad 50 opublikowanych w
              czasopismach znajdujących się na liście filadelfijskiej, spośród
              których najbardziej prestiżowe czasopisma to: Renewable &
              Sustainable Energy Reviews, Waste Management, Energy, Journal of
              Cleaner Production, Bioresource Technology i Science of The Total
              Environment. W latach 2022 oraz 2023 zostałem sklasyfikowany na
              liście 2% najbardziej wpływowych naukowców na świecie pod względem
              cytowań w literaturze naukowej. Ranking został przygotowany przez
              Uniwersytet Stanforda we współpracy z wydawnictwem Elsevier.
              Potwierdzeniem mojej szerokiej działalności prowadzonej na arenie
              międzynarodowej są m.in. dwie książki. W 2023 r. wydawnictwo
              Springer Nature opublikowało moją książkę &quot;Biological
              treatment of waste and by-product from food industry&quot;.
              Dodatkowo jestem również edytorem i współautorem czterech
              rozdziałów w opublikowanej przez wydawnictwo Wiley książce „Biogas
              Plants - Waste Management, Energy Production, and Carbon Footprint
              Reduction” (2024).
            </p>
          </div>
          <div className='p-4 w-full grid place-items-center lg:order-3'>
            <div className='relative px-4 flex items-center justify-center'>
              <img
                src={'/czekala2.jpeg'}
                alt='Zdjęcie przedstawiające Profesora Czekałę'
                width={550}
                height={550}
                className='rounded-lg drop-shadow-2xl'
              />
            </div>
          </div>
          <div className='text-center lg:max-w-[35rem] lg:text-left lg:order-5 p-4'>
            <span className='relative font-bold text-xl'>
              <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[120%] lg:before:m-2'></span>
              <h2 className='relative px-4 lg:p-0 inline-block mb-5 lg:m-2'>
                Doświadczenie
              </h2>
            </span>
            <p className='text-justify'>
              Podczas mojej pracy naukowej byłem kierownikiem licznych projektów
              badawczych, w tym grantu: &quot;IN-OIL: Innowacyjna metoda
              biokonwersji produktów ubocznych przemysłu spożywczego&quot;
              realizowanego w ramach projektu LIDER VII, finansowanego przez
              Narodowe Centrum Badań i Rozwoju. Jestem również Laureatem
              Stypendium dla wybitnych młodych naukowców, przyznawanego przez
              Ministerstwo Nauki i Szkolnictwo Wyższego dla najlepszych młodych
              naukowców w Polsce (2017). Mimo tego, że jestem naukowcem oraz
              dydaktykiem, jestem również praktykiem posiadającym doświadczenie
              w realizacji ponad 100 projektów wspólnie z m.in. największymi
              podmiotami gospodarczymi w Polsce. Być może znasz mnie również z
              wielu wydarzeń branżowych, na których systematycznie występuje od
              2011 roku. W swojej pracy łączę naukę, wiedzę, technologie i
              biznes.
            </p>
          </div>
          <div className='p-4 w-full grid place-items-center lg:order-6'>
            <div className='relative flex items-center justify-center'>
              <img
                src={'/czekala3.jpg'}
                alt='Zdjęcie przedstawiające Profesora Czekałę'
                width={350}
                height={350}
                className='rounded-lg drop-shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg] mb-10' />
      <section className='my-14' id='ekoslownik'>
        <div className='flex flex-wrap gap-[5rem] items-center justify-center'>
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-accent  to-primary p-1 drop-shadow-2xl'>
            <div className='flex flex-col h-full w-full text-justify items-center bg-grayish p-4 gap-y-3'>
              <p className='text-xl text-black font-black'>Środowisko</p>
              <span>
                Pod tym pojęciem należy rozumieć ogół elementów przyrodniczych
                ożywionych i nieożywionych, wzajemne oddziaływania pomiędzy
                nimi. Pojęcie środowiska obejmuję również jego elementy które
                zostały przekształcone w wyniku działalności człowieka.
              </span>
            </div>
          </div>
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-accent  to-primary p-1 drop-shadow-2xl'>
            <div className='flex flex-col h-full w-full text-justify items-center bg-grayish p-4 gap-y-3'>
              <p className='text-xl text-black font-black'>Odpady</p>
              <span>
                Przedmioty lub substancje powstałe w wyniku działalności
                człowieka, które nie są mu przydatne w danym miejscu i czasie.
              </span>
            </div>
          </div>
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-accent  to-primary p-1 drop-shadow-2xl'>
            <div className='flex flex-col h-full w-full text-justify items-center bg-grayish p-4 gap-y-3'>
              <p className='text-xl text-black font-black'>Energia</p>
              <span>
                Jest to skalarna wielkość fizyczna wyrażająca zdolność do
                wykonania pracy przez ciało lub układ ciał. Jednostką energii w
                układzie SI jest dżul [J].
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='w-[15rem] h-[4rem] bg-gradient-to-r from-accent to-primary rounded-[45px] mt-10 px-4 font-medium text-black text-shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-accent/80 hover:to-primary/90'
            onClick={() => router.push('/eko-slownik')}
          >
            Sprawdź kompendium
          </button>
        </div>
      </section>
      <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg] mb-10' />
      {/* contact section */}
      <section id='kontakt' className='my-14 flex items-center flex-col'>
        <h1 className='text-2xl text-center font-bold md:text-4xl mb-10'>
          <span className='relative'>
            <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[130%]'></span>
            <span className='relative px-4 lg:p-0 inline-block'>Kontakt</span>
          </span>
        </h1>
        <div className='grid place-items-center grid-cols-1 w-full mt-5 lg:grid-cols-3 gap-y-8'>
          <div className='flex flex-col items-center justify-center w-[15rem] hover:cursor-pointer'>
            <a href={`mailto:${email}`}>
              <BsEnvelopeFill
                className='text-7xl'
                style={{ fill: 'url(#gradient)' }}
              />
            </a>
            <span>{email}</span>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2 w-[15rem]'>
            <a href={linkedIn} target='_blank'>
              <BsLinkedin
                className='text-6xl'
                style={{ fill: 'url(#gradient)' }}
              />
            </a>
            <span>Wojciech Czekała</span>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2 w-[15rem]'>
            <a href={`tel:${phone}`}>
              <BsTelephoneFill
                className='text-6xl'
                style={{ fill: 'url(#gradient)' }}
              />
            </a>
            <span>{phone}</span>
          </div>
        </div>
      </section>
    </>
  );
}
