function setup() {
 
}

function draw(){
  
}

var thisIframe = $('#viewer-frame');
var loaded = false;


var viewerFrame = setInterval(function(){
    reload();
  console.log("reload")
}, 30000);

function onFrameLoad() {
 
    if ($(thisIframe).attr('src')) {
        loaded = true;
     
      //  clearInterval(viewerFrame);
        thisIframe.removeClass('removeDisplay');
        $('.loading-container').addClass('removeDisplay');
    }
}


/*var currentState = $(thisIframe).attr('src');
if (!currentState) {
    clearInterval(viewerFrame);
}*/

function reload() {
    currentSrc = $(thisIframe).attr('src');
    function removeSrc() {
        $(thisIframe).attr('src', '');
    }

    setTimeout (removeSrc, 100);
    function replaceSrc() {
        $(thisIframe).attr('src', currentSrc);
    }

    setTimeout (replaceSrc, 200);
}