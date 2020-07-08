const pressed = [];
const secretCode = 'benstoica';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        //what you want to happen when secret code is typed
    }
});