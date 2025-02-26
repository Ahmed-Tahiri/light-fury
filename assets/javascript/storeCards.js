let mainStoreContainer = document.querySelector('.storeMainContent');
let characters = [
    {
        img: 'https://img.freepik.com/premium-photo/character-with-sword-helmet-with-word-war-it_849715-1443.jpg',
        skinName: 'Galatic Clash',
        'characterName': 'Commander Joseph'

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