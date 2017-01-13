let ClockApp = (function (window, undefined) {

  let init = function () {
      console.log("init")
  };

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
