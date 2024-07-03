document.querySelectorAll('.littlesImg').forEach(littleImg => {
    littleImg.addEventListener('mouseover', () => {
        const targetId = littleImg.getAttribute('data-target');

        document.querySelectorAll('#imgMain, #imgMain2, #imgMain3, #imgMain4').forEach(img => {
            if (img.id === targetId) {
                img.classList.remove('hidden');
                img.classList.add('visible');
            } else {
                img.classList.remove('visible');
                img.classList.add('hidden');
            }
        });
    });
});

