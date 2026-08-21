import EventEmitter from "node:events";
function createDomElements(){
    const emitter = new EventEmitter();
    return {
        addEventlistener(eventType,listener){
            emitter.on(eventType, listener)},

        removeEventlistener(eventType,listener){
            emitter.off(eventType,listener)},

        dispatchEvent(event){
           event.target=this;
           event.currentTarget=this;
           emitter.emit(event.eventType,event);
        }
    }
}
const button=createDomElements();
button.addEventlistener('save',()=>{  //definig function at the time of calling
    console.log("saving.....");
})
button.dispatchEvent({
    eventType:"save"
});

function handleClick(event){
    console.log("mouse clicked")
    console.log(event.eventType)
    console.log(`message:${event.detail}`);
}
button.addEventlistener('click',handleClick);  //creating function named handleClick before and then calling it 
button.dispatchEvent({
    eventType:"click"
});
button.addEventlistener('submit',()=>{
    console.log("data submitteed successfully")
})
button.dispatchEvent({
    eventType:"submit"
});