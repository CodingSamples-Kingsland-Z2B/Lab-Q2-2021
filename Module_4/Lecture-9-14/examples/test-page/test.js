let hash = window.location.href.split('#')[1] || '';
let changePath = function (path) {
       let currentPath = window.location.href;
    //console.log( window.location.href);
    window.location.href = currentPath.replace(/#(.*)$/, '') + '#'+ path;
    //console.log( window.location.href);
};
// window.onpopstate = function(event) {
//     alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
// }

document.getElementById('middleclick').addEventListener("click",function(){
    changePath("bottom");
});
document.getElementById('bottomclick').addEventListener("click",function(){
    changePath("top");
});


document.getElementById('topclick').addEventListener("click",function(){
    //changePath("middle");
    let myObj ={
        info:"this is the templated peice that comes out"
    };
    document.getElementById('historyCheck').innerHTML= myObj.info;
    history.pushState(
         myObj, "", "#popOut");
});

window.addEventListener('popstate', ({ state }) => {
    console.log(state);
    if (!state) {
        document.getElementById('historyCheck').innerHTML = '';
        return;
    }
    
    const { myObj } = state;
    document.getElementById('historyCheck').innerHTML= myObj;
    
});


let url = undefined;
let getCurrent = function () {
  return window.location.hash;
};
let listen = function () {
    //console.log(getCurrent());
  let current = getCurrent();
  if (current !== url) {
    url = current;
  }
  setTimeout(listen, 200);
};
listen();
//console.log(getCurrent());