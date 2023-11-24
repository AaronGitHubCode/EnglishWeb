document.querySelectorAll('.leftSide button').forEach((button, index, buttons) => {
    button.addEventListener('mouseenter', function() {
        const currentWidth = this.clientWidth + 'px';
        const middleIndex = Math.floor(buttons.length / 2);

        buttons.forEach((btn, idx) => {
            const distance = Math.abs(idx - index);
            const widthPercentage = 100 - (20 * distance);
            const width = widthPercentage + '%';
            btn.style.width = width;
        });
    });

    button.addEventListener('mouseleave', function() {
        buttons.forEach(btn => {
            btn.style.width = '25%';
        });
    });
});

const imageMap = {
    button1: 'https://i.pinimg.com/736x/75/fd/30/75fd30d7c5ef1965920f3bc6cbbe61bf.jpg',
    button2: 'https://i.pinimg.com/474x/ac/34/91/ac3491500451693443a09f1e53ad61ee.jpg',
    button3: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a3/latest/20221013200240/Artwork_Pikachu_UNITE.png/250px-Artwork_Pikachu_UNITE.png',
    button4: 'https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/f/f8/latest/20220120191431/Articuno_Ilustracion.png/250px-Articuno_Ilustracion.png',
    button5: 'https://www.lullabybebe.com/wp-content/uploads/2017/10/chupete_baby_2019_en_blanco_lemon_Mi_Pipo_clipped_rev_1-250x250.jpeg'
};

document.querySelectorAll('.leftSide button').forEach((button, index) => {
    button.addEventListener('click', function() {
        const imageUrl = imageMap[`button${index + 1}`];
        const image = document.querySelector('.rightSide div img');

        image.style.opacity = 0;

        setTimeout(() => {
            image.src = imageUrl;

            setTimeout(() => {
                image.style.opacity = 1;
            }, 100);
        }, 500);
    });
});
