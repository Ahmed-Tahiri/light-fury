let mainStoreContainer = document.querySelector('.storeMainContent');
let characters = [
    {
        img: 'https://pm1.aminoapps.com/7652/322a7bb59aa028fdb37d32172158281679c2d0a5r1-720-720v2_00.jpg',
        skinName: 'Galatic Clash',
        'characterName': 'Senna William'

    },
    {
        img: 'https://img.freepik.com/premium-photo/warrior-gaming-character-girl_758367-6507.jpg',
        skinName: 'Realm of Legends',
        'characterName': 'Katherine Langford'

    },
    {
        img: 'https://img.freepik.com/premium-photo/anubis-god-warrior-antropomophized-armour_751108-3212.jpg',
        skinName: 'Ancient Gods',
        'characterName': 'Anubis God Warrior'

    },
];

characters.forEach((character) => {

    let characterCard = createNewElement(['div', 'characterCard', mainStoreContainer]);
    createNewElement(['img', null, characterCard, '', { 'src': character.img, 'alt': character.characterName }]);
    let characterDetails = createNewElement(['div', 'characterDetails', characterCard]);
    createNewElement(['p', 'skinName', characterDetails, character.skinName]);
    createNewElement(['p', 'characterName', characterDetails, character.characterName]);
    let purchaseOption = createNewElement(['div', 'purchaseOption', characterCard]);
    createNewElement(['button', 'buyBtn', purchaseOption, 'Buy', { 'type': 'button' }]);
    createNewElement(['p', 'previewText', purchaseOption, 'Preview']);
});