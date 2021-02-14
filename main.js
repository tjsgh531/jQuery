function addEvent(target,eventType, eventHandler, useCapture){
    console.log(target.addEventListener);
    console.log(target.attachEvent);
    if(target.addEventListener){
        target.addEventListener(eventType,eventHandler,useCapture?useCapture:false);
    }else if(target.attachEvent){
        const r = target.attachEvent("on"+eventType,eventHandler);
    }
}

function clickHandler(event){
    const nav = document.getElementById('navigation');
    for(let i = 0 ; i < nav.childNodes.length; i++){
        const child = nav.childNodes[i];
        if(child.nodeType == 3) continue;
        child.className = '';
    }
    event.target.className = 'selected';
}

addEvent(window, 'load', function(eventObj){
    const nav = document.getElementById('navigation');
    for(let i = 0 ; i < nav.childNodes.length; i++){
        const child = nav.childNodes[i];
        if(child.nodeType == 3) continue;
        addEvent(child,'click', clickHandler);
    }
})