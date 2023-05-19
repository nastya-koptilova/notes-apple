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
    <>
      <p>Delete this note?</p>
      <button type="button" onClick={onClickDeleteNote}>
        Yes
      </button>
      <button type="button" onClick={onClickCloseModal}>
        No
      </button>
    </>,
    modalRoot
  );
};
