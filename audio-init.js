document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');

    function attemptPlay() {
        backgroundMusic.volume = 0.7;
        const playPromise = backgroundMusic.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                const handleFirstInteraction = () => {
                    backgroundMusic.play();
                    document.body.removeEventListener('click', handleFirstInteraction);
                    document.body.removeEventListener('keydown', handleFirstInteraction);
                    document.body.removeEventListener('touchstart', handleFirstInteraction);

                    const instruction = document.querySelector('.audio-instruction');
                    if (instruction) instruction.remove();
                };

                const instruction = document.createElement('div');
                instruction.className = 'audio-instruction';
                instruction.innerHTML = 'Haz clic en cualquier parte para activar la música';
                instruction.style.position = 'fixed';
                instruction.style.bottom = '20px';
                instruction.style.left = '50%';
                instruction.style.transform = 'translateX(-50%)';
                instruction.style.backgroundColor = '#fff';
                instruction.style.padding = '10px 20px';
                instruction.style.borderRadius = '10px';
                instruction.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                instruction.style.color = '#333';
                instruction.style.fontSize = '0.9rem';
                instruction.style.zIndex = '9999';
                document.body.appendChild(instruction);

                document.body.addEventListener('click', handleFirstInteraction);
                document.body.addEventListener('keydown', handleFirstInteraction);
                document.body.addEventListener('touchstart', handleFirstInteraction);
            });
        }
    }

    attemptPlay();
    backgroundMusic.addEventListener('loadedmetadata', attemptPlay);
});