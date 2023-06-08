const CONTENT_CLASSES = {
  FOOT_NOTE: 'FOOT_NOTE',
  CHAPTER_END_NOTE: 'CHAPTER_END_NOTE',
  BOOK_END_NOTE: 'BOOK_END_NOTE',
};

export const foo = (elContainer) => {
  if (!elContainer) {
    return;
  }

  const noteElements = elContainer.querySelectorAll(
    `a.${CONTENT_CLASSES.FOOT_NOTE},a.${CONTENT_CLASSES.CHAPTER_END_NOTE},a.${CONTENT_CLASSES.BOOK_END_NOTE}`
  );

  for (const noteEl of noteElements) {
    if (!noteEl.parentNode) {
      continue;
    }

    const containsMark = noteEl.querySelector("mark");
    if (!containsMark) {
      continue;
    }

    const markWrapperForNoteEl = document.createElement("mark");
    markWrapperForNoteEl.appendChild(noteEl.cloneNode(true));
    noteEl.parentNode.replaceChild(markWrapperForNoteEl, noteEl);
  }
};
