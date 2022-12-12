const whatWeOfferSwiper = new Swiper('.what-we-offer__swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const aboutUsSwiper = new Swiper('.about-us__swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const jumpTo = anchor_id => {
    var url = location.href;
    location.href = '#' + anchor_id;
    history.replaceState(null, null, url);
};