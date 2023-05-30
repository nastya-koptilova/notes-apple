import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { NotesContext } from "../../context/NotesContext";
import s from "./ModalDelete.module.scss";

const modalRoot = document.querySelector("#modal-root");

export const ModalDelete = () => {
  const { handleDeleteNote, noteId, handleCloseModal } =
    useContext(NotesContext);

  useEffect(() => {
    const onModalClose = (event) => {
      if (event.code === "Escape") {
        handleCloseModal();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onModalClose);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onModalClose);
    };
  }, [handleCloseModal]);

  const onClickDeleteNote = () => {
    handleDeleteNote(noteId);
  };

  const onClickCloseModal = () => {
    handleCloseModal();
  };

  const onClickBackdropClose = (event) => {
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={onClickBackdropClose}>
      <div className={s.modal}>
        <p className={s.modal__text}>Delete this note?</p>
        <div className={s.modal__button_container}>
          <button
            className={s.modal__button}
            type="button"
            onClick={onClickDeleteNote}
          >
            Yes
          </button>
          <button
            className={s.modal__button}
            type="button"
            onClick={onClickCloseModal}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};
