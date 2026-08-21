
import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (teacher) => {
    console.log(`class started by ${teacher}`);
});
myEmitter.on("exit",(teacher) => {
    console.log(`class finished by ${teacher}`);
});
myEmitter.on("Game", (me) => {
    console.log(`Game started by ${me}`);
});
myEmitter.emit("greet","sir");
myEmitter.emit("exit","sir");
myEmitter.emit("Game","aniket")