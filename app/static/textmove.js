let currentDroppable = null;

result.onmousedown = function (event) {

  let shiftX = event.clientX - result.getBoundingClientRect().left;
  let shiftY = event.clientY - result.getBoundingClientRect().top;

  result.style.position = 'absolute';
  result.style.zIndex = 1000;
  document.body.append(result);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    console.log(pageX)
    console.log(pageY)
    var position = document.getElementById("capture").getElementsByClassName("img-box")[0].getBoundingClientRect();
    if (position.left < pageX && pageX < position.right && position.top < pageY && pageY < position.bottom) {
      result.style.left = pageX - shiftX + 'px';
      result.style.top = pageY - shiftY + 'px';
    } else {
    }
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    result.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    result.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('click', onMouseMove);

  result.onmouseup = function () {
    document.removeEventListener('click', onMouseMove);
    result.onmouseup = null;
  };

};
result.ondragstart = function () {
  return false;
};