function openDialog(dialog) {
  dialog.showModal();
  document.addEventListener("mousedown", closeDialogWithMouse);
}

function closeDialogWithMouse(evt) {
  if (
    evt.target.classList.contains("dialog__close") ||
    evt.target.classList.contains("dialog")
  ) {
    closeDialog(evt.target.closest(".dialog"));
  }
}

function closeDialog(dialog) {
  dialog.close();
  document.removeEventListener("click", closeDialogWithMouse);
}

export { openDialog, closeDialog };
