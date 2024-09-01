export const openModal = (id: string) => {
  let $modal = document.getElementById(id) as HTMLDialogElement;

  if (!$modal) return;

  closeModal();

  $modal.showModal();
};

export const closeModal = () => {
  let $modal = document.querySelector("dialog[open]") as HTMLDialogElement;

  if (!$modal) return;

  $modal.close();
};
