import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { NotesContext } from "../../context/NotesContext";
import s from "./ModalDelete.module.scss";

const modalRoot = document.querySelector("#modal-root");

export const ModalDelete = () => {
  const { handleDeleteNote, noteId, handleCloseModal } =
    useContext(NotesContext);

  const onClickDeleteNote = () => {
    handleDeleteNote(noteId);
  };

  const onClickCloseModal = () => {
    handleCloseModal();
  };

  return createPortal(
    <div className={s.backdrop}>
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
