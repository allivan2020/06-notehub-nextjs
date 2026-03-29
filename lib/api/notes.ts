import axios from 'axios';
import {
  Note,
  FetchNotesParams,
  FetchNotesResponse,
  CreateNoteParams,
} from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    // Важливо: використовуємо NEXT_PUBLIC як у ТЗ
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async (params: FetchNotesParams) => {
  const { data } = await api.get<FetchNotesResponse>('/notes', { params });
  return data;
};

export const fetchNoteById = async (id: string) => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};

export const createNote = async (data: CreateNoteParams) => {
  const { data: note } = await api.post<Note>('/notes', data);
  return note;
};

export const deleteNote = async (id: string) => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};
