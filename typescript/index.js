let lastClicked = null;

document.querySelectorAll('.leftSide button').forEach(button => {
    button.addEventListener('click', function() {
        const currentWidth = window.getComputedStyle(this).width;

        if (lastClicked !== this) {
            lastClicked = this;

            document.querySelectorAll('.leftSide button').forEach(btn => {
                if (btn === lastClicked) {
                    btn.style.width = currentWidth;
                } else {
                    btn.style.width = '80px';
                }
            });
        } else {
            lastClicked.style.width = '80px';
            lastClicked = null;
        }
    });
});
