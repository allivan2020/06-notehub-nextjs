import React from 'react';
import Link from 'next/link';
import { Note } from '@/types/note';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void; // Додайте логіку видалення з ДЗ-5
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <h3>{note.title}</h3>
          <div className={css.actions}>
            <Link href={`/notes/${note.id}`} className={css.link}>
              View details
            </Link>
            <button onClick={() => onDelete(note.id)} className={css.deleteBtn}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
