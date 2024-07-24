const DictionaryPage = () => {
    const dictionary = [
        {
            title: 'Biodegradacja',
            description:
                'Naturalny proces rozkładu materii organicznej zachodzący pod wpływem mikroorganizmów w warunkach tlenowych oraz beztlenowych.',
        },
        {
            title: 'Biomasa',
            description:
                'Są to produkty, pozostałości oraz odpady pochodzenia roślinnego lub zwierzęcego które ulegają biodegradacji. Biomasa jest najłatwiejszym do pozyskania oraz najszerzej wykorzystywanym odnawialnym źródłem energii.',
        },
        {
            title: 'Biopaliwa',
            description:
                'Są to paliwa wytworzone z biomasy. Ze względu na stan skupienia biopaliwa dzieli się na stałe, ciekłe oraz gazowe.',
        },
        {
            title: 'Energia',
            description:
                'Jest to skalarna wielkość fizyczna wyrażająca zdolność do wykonania pracy przez ciało lub układ ciał. Jednostką energii w układzie SI jest dżul [J].',
        },
        {
            title: 'Odnawialne źródła energii',
            description:
                'Są to niewyczerpywalne źródła energii, które odnawiają się w sposób naturalny. Odnawialne źródła energii obejmują m.in. energię wiatru, energię promieniowania słonecznego, energię wody, energię geotermalną, energię otrzymywaną z biomasy, odpadów i biopaliw.',
        },
        {
            title: 'Odpady',
            description:
                'Przedmioty lub substancje powstałe w wyniku działalności człowieka, które nie są mu przydatne w danym miejscu i czasie.',
        },
        {
            title: 'Odpady komunalne',
            description:
                'Są to wszystkie odpady powstające w gospodarstwach domowych. Odpady komunalne powstają w wyniku nieprzemysłowej działalności człowieka.',
        },
        {
            title: 'Odpady przemysłowe',
            description:
                'Są to wszystkie odpady powstające w wyniku gospodarczej działalności człowieka.',
        },
        {
            title: 'Środowisko',
            description:
                'Od tym pojęciem należy rozumieć ogół elementów przyrodniczych ożywionych i nieożywionych, wzajemne oddziaływania pomiędzy nimi. Pojęcie środowiska obejmuje również jego elementy które zostały przekształcone w wyniku działalności człowieka.',
        },
    ];

    const dictionaryItems = dictionary.map((item, index) => {
        return (
            <>
                <div key={item.title} className='text-center lg:max-w-[35rem] lg:text-left p-4 md:max-w-[30rem]'>
                    <h2 className='font-bold text-xl px-4 lg:p-0 mb-5 lg:m-2 text-center w-[100%]'>
                        {item.title}
                    </h2>
                    <p className='text-justify whitespace-pre-wrap'>{item.description}</p>
                </div>
            </>
        );
    });

    return (
        <section id='eko-slownik' className='pt-[5rem] mb-[auto] flex flex-col min-h-[100vh]'>
            <h1 className='text-2xl text-center font-bold md:text-4xl'>
                <span className='relative'>
                    <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[120%]'></span>
                    <span className='relative px-4 lg:p-0 inline-block'>
                        Ekosłownik
                    </span>
                </span>
            </h1>
            <div className='mt-10 grid place-items-center grid-cols-1 lg:grid-cols-2 items-start h-full'>
                {dictionaryItems}
            </div>
        </section>
    );
};

export default DictionaryPage;
