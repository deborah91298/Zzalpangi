
// let currentDroppable = null;

// result.onmousedown = function (event) {
//   let shiftX = event.clientX - result.getBoundingClientRect().left;
//   let shiftY = event.clientY - result.getBoundingClientRect().top;
//   result.style.position = 'absolute';
//   result.style.zIndex = 1000;
//   document.body.append(result);

//   moveAt(event.pageX, event.pageY);
  

//   function moveAt(pageX, pageY) {
//     var position = document.getElementById("capture").getElementsByClassName("img-box")[0].getBoundingClientRect();
//     let shot = document.getElementById("shot").getBoundingClientRect();
//     if (shot.left < pageX && pageX < shot.right && shot.top < pageY && pageY < shot.bottom) {
//       return;
//     } else if (position.left < pageX && pageX < position.right && position.top < pageY && pageY < position.bottom) {
//       result.style.left = pageX +'px';
//       result.style.top = pageY + 'px';

//       let picX = result.style.left;
//       let picY = result.style.top;

//       function setCookie(cname, cvalue, exdays) {
//         const d = new Date();
//         d.setTime(d.getTime() + (exdays*24*60*60*1000));
//         let expires = "expires="+ d.toUTCString();
//         document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//       }
//       setCookie("top", picY, 1);
//       setCookie("left", picX, 1);
//       console.log("move");
//       return;
//     } else {
//       return;
//     }
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     result.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     result.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.closest('.droppable');
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) { // null when we were not over a droppable before this event
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) { // null if we're not coming over a droppable now
//         // (maybe just left the droppable)
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   document.addEventListener('click', onMouseMove);

//   result.onmouseup = function () {
//     document.removeEventListener('click', onMouseMove);
//     result.onmouseup = null;
//   };

// };
// result.ondragstart = function () {
//   return false;
// };