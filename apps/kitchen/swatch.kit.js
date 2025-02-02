(() => {
  function getFace(){
    let swObject = undefined;

    function log_debug(o) {
      //console.log(o);
    }
    
    function init(gps, sw) {
      showMem("swatch init 1");
      swObject = sw;
      g.clear();
      showMem("swatch init 2");
    }

    function freeResources() {
      showMem("swatch free 1");
      swObject = undefined;
      showMem("swatch free 2");
    }

    function showMem(msg) {
      var val = process.memory();
      var str = msg + " " + Math.round(val.usage*100/val.total) + "%";
      log_debug(str);
    }
    
    function startTimer() {
      log_debug("swObject.startTimer()");
      swObject.startTimer();
    }
    
    function stopTimer() {
      log_debug("swObject.stopTimer()");
      swObject.stopTimer();
    }

    function onButtonShort(btn) {
      switch (btn) {
      case 1:
        swObject.stopStart();
        break;
      case 2:
        swObject.lapOrReset();
        break;
      case 3:
      default:
        return;
      }
    }
    
    function onButtonLong(btn) {}

    return {init:init, freeResources:freeResources, startTimer:startTimer, stopTimer:stopTimer,
            onButtonShort:onButtonShort, onButtonLong:onButtonLong};
  }

  return getFace;
})();
