let gamesContainer = document.querySelector('.gamesContainer');

let games = [
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rjFBF3UuElqPHvKDjFBG2g4WsIgi6_Vuug&s',
        'name': 'WWE 2k23',
        'price': '$2.70'
    },
    {
        'img': 'https://business-portal-bucket.s3.amazonaws.com/media/images/41e172c318357d632f53b92d8cb38661_large_cover.original.jpg',
        'name': 'Dota 2',
        'price': 'Free'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6HsvX_EB4wDblizL5qmeNluDZwkFl1jiKQ&sg',
        'name': 'Grand Theft Auto V',
        'price': '$40.00'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGki7dttbAuGO3rXPfBaHbTPpIoGTQq_YIQ&s',
        'name': 'League Of Legends',
        'price': 'Free'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJ-wa7SKMB-JAZXZAktkd0gM2XZ6yFhPCOg&s',
        'name': 'EA Cricket 07',
        'price': '$15.00'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWS3TCWOCd-df-P4O48JC76fk9Byp8uje5w&s',
        'name': 'The Elder Scrolls V: Skyrim Special Edition',
        'price': '$2.70'
    },
    {
        'img': 'https://images.gog-statics.com/35cd661ed60c46beb5a99a744f6e70ab12c0b4055a92028ef0b2460ff09e6962_product_card_v2_mobile_slider_639.jpg',
        'name': 'BioShock Infinite',
        'price': '$15.00'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUJf3BTzjvls3RAHxhbdkEa66yLGhuNRbfQ&s',
        'name': 'FC 24',
        'price': '$25.00'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGUn-HCEV9fzDMN0tZld2jwpnfFXPPDL3Zw&s',
        'name': 'Call Of Duty: Black OPS 4',
        'price': '$99.00'
    },
    {
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydj1G3aPIe564J3pCqquttvJNCJGCdoLh7Q&s',
        'name': 'Just Cause 4',
        'price': '$33.00'
    },
];

games.forEach((game) => {
    let gameCard = createNewElement(['div', 'gameCard', gamesContainer]);
    createNewElement(['img', null, gameCard, '', { 'src': game.img, 'alt': game.name }]);
    createNewElement(['p', 'gameName', gameCard, game.name]);
    createNewElement(['p', 'price', gameCard, game.price]);
});