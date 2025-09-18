let saleContainer = document.querySelector('.sectionContent');

let cards = [
    {
        'img': 'https://play-lh.googleusercontent.com/zytctoIngr4TCYxECLqZWuSx20cQ1OpAHSmle4BHnEwf-buMOA_ezEIoUx0VLO666g',
        'discount': '-25%',
        'price': '$10.50',
        'name': 'The Walking Dead: A New Frontier'
    },
    {
        'img': 'https://m.media-amazon.com/images/I/61XOs16rwhL.jpg',
        'discount': '-10%',
        'price': '$26.10',
        'name': 'FIFA 19'
    },
    {
        'img': 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/89c7e442647999.560729f86f902.jpg',
        'discount': '-80%',
        'price': '$1.00',
        'name': 'Sleeping Dogs'
    },
    {
        'img': 'https://i.ebayimg.com/images/g/OlMAAOSw6xNkaVwO/s-l1200.jpg',
        'discount': '-70%',
        'price': '$2.70',
        'name': 'Counter-Strike: Global Offensive'
    },
    {
        'img': 'https://i.pinimg.com/736x/cf/1d/3b/cf1d3b655f9bd873f043764b70dc44c3.jpg',
        'discount': '-5%',
        'price': '$33.25',
        'name': 'Rise of the - Tomb Raider'
    },
];

cards.forEach((card, index) => {
    let cardContainer = createNewElement(['div', 'saleCard', saleContainer]);
    let tag = createNewElement(['p', 'priceTag', cardContainer]);
    createNewElement(['span', 'off', tag, card.discount]);
    createNewElement(['span', 'price', tag, card.price]);
    createNewElement(['img', null, cardContainer, '', { 'src': card.img, 'alt': card.name }]);
    createNewElement(['p', 'gameName', cardContainer, card.name])

});