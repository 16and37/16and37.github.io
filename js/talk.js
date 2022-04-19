new TypeIt("#1637", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("16 && 37")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("感谢有你")
    .pause(3000)
    .go();

new TypeIt('#16AND37', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
