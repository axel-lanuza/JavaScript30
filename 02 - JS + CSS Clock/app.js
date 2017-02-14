let ClockApp = (function(window, undefined) {

    //Dom Cache
    const domCache = {
        secondsHand : document.querySelector('.second-hand'),
        minutesHand : document.querySelector('.min-hand'),
        hoursHand : document.querySelector('.hour-hand')
      }

    const init = function() {
        console.log("init");
        bindEvents();

    };

    let bindEvents = function() {
        setInterval(setDate, 1000);
        console.log(domCache.secondsHand);
    }

    let setDate = function() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const secondsToDegrees = ((seconds / 60) * 360) + 90;
        const minutesToDegress = ((minutes / 60) * 360) + 90;
        const housrToDegrees = ((hours / 12) * 360) + 90;

        domCache.secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;
        domCache.minutesHand.style.transform = `rotate(${minutesToDegress}deg)`;
        domCache.hoursHand.style.transform = `rotate(${housrToDegrees}deg)`;
    }

    return {
        Init: init
    }

})(window, undefined);

let callback = ClockApp.Init();

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}
