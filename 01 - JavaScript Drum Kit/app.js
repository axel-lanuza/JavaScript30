let DrumKitApp = (function(window, undefined) {
    'use strict';

    // DOM Cache and variables
    let $window = window,
        $keys = document.querySelectorAll(".key");

    let bindEvents = function() {
        $window.addEventListener('keydown', playSound);
        $keys.forEach(function(key) {
            key.addEventListener('transitionend', removeTransition);
        });
    };

    let playSound = function(e) {
        let $audio = document.querySelector('audio[data-key="' + event.keyCode + '"]'),
            $key = document.querySelector('.key[data-key="' + event.keyCode + '"]');
        if (!$audio) return; // stop the function from running all together
        $audio.currentTime = 0; // rewind the audio to the start
        $audio.play();
        $key.classList.add('playing');
    };

    let removeTransition = function(e) {
        if (e.propertyName !== 'transform') return; // skip it if it's not transform
        this.classList.remove('playing');
    };

    let init = function() {
        bindEvents();
    };

    return {
        Init: init
    }

})(window, undefined);

let callback = DrumKitApp.Init();

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}
