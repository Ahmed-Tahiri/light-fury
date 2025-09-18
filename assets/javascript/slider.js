let mainSliderContainer = document.querySelector('.sliderContainer');
let mainSliderBtnsContainer = document.querySelector('.sliderbtnContainer');
let banners = [
    {
        'img': 'https://images2.alphacoders.com/520/thumb-1920-520246.jpg',
        'name': 'The Witcher 3: Wild Hunt',
        'price': '$22.00'

    },
    {
        'img': 'https://www.ytgraphics.com/static/1c26bd0238d12ce2b09b68091b8e87a9/2493a/watch-dogs-2.webp',
        'name': 'Watch Dogs 2',
        'price': '$25.00'

    },
    {
        'img': 'https://cdn2.unrealengine.com/tetra-preorder-standard-edition-epic-store-landscape-2560x1440-2560x1440-430970417.jpg',
        'name': 'Far Cry 6',
        'price': '$36.00'

    },
    {
        'img': 'https://gaming-cdn.com/images/products/6147/orig/assassin-s-creed-valhalla-pc-game-ubisoft-connect-europe-cover.jpg?v=1709130520',
        'name': "Assassin's Creed Valhalla",
        'price': '$51.00'

    },
];

banners.forEach((banner, index) => {
    let bannerContent = createNewElement(['div', ['slide', 'fade'], mainSliderContainer]);
    createNewElement(['img', null, bannerContent, '', { 'src': banner.img }]);
    createNewElement(['div', ['slideText', `banner${index}`], bannerContent]);
    createNewElement(['span', 'name', `.banner${index}`, banner.name]);
    createNewElement(['span', 'price', `.banner${index}`, banner.price]);
    createNewElement(['button', 'sliderBtn', mainSliderBtnsContainer, '', { 'type': 'button' }]);

});


let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let slides = document.getElementsByClassName("slide");
let miniBtn = document.querySelectorAll(".sliderBtn");
let slideIndex = 1;
nextBtn.addEventListener('click', () => { showSlides(slideIndex += 1); });
prevBtn.addEventListener('click', () => { showSlides(slideIndex += -1); });

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        miniBtn[i].style.backgroundColor = 'transparent';
    }
    miniBtn[slideIndex - 1].style.backgroundColor = '#580056';
    slides[slideIndex - 1].style.display = "flex";
}
showSlides(slideIndex);


setInterval(() => {
    showSlides(slideIndex += 1);
}, 5000);
