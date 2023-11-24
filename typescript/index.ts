let lastClicked: HTMLButtonElement | null = null;

document.querySelectorAll('.leftSide button').forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', function(this: HTMLButtonElement) {
        const currentWidth = window.getComputedStyle(this).width;

        if (lastClicked !== this) {
            lastClicked = this;

            document.querySelectorAll('.leftSide button').forEach((btn: HTMLButtonElement) => {
                if (btn === lastClicked) {
                    btn.style.width = currentWidth;
                } else {
                    btn.style.width = '80px';
                }
            });
        } else {
            if (lastClicked) {
                lastClicked.style.width = '80px';
                lastClicked = null;
            }
        }
    });
});
