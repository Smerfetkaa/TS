type NoteStatus = 'todo' | 'done';
type INotePayload = Partial<Pick<INote, 'title' | 'content'>>;

interface INote {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  editDate: Date | null;
  status: NoteStatus;
  markAsDone(): void;
}
abstract class BaseNote implements INote {
  readonly id: number;
  title: string;
  content: string;
  readonly creationDate: Date = new Date();
  editDate: Date | null = null;
  status: NoteStatus = 'todo';
  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
  markAsDone(): void {
    this.status = 'done';
  }
  abstract editNote({ title, content }: INotePayload, confirmation: boolean): void;

  abstract readonly requiresConfirmation: boolean;
}
class DefaultNote extends BaseNote {
  readonly requiresConfirmation: boolean = false;

  editNote({ title, content }: INotePayload): void {
    if (title?.trim()) this.title = title;
    if (content?.trim()) this.content = content;
    this.editDate = new Date();
  }
}
class ConfirmationNote extends BaseNote {
  readonly requiresConfirmation: boolean = true;

  editNote({ title, content }: INotePayload, confirmation: boolean = false): void {
    if (confirmation) {
      if (title?.trim()) this.title = title;
      if (content?.trim()) this.content = content;
      this.editDate = new Date();
    } else {
      throw new Error('Confirmation required for editing ConfirmationNote');
    }
  }
}

interface ITodoList {
  notes: (DefaultNote | ConfirmationNote)[];
  addNote(title: string, content: string, requiresConfirmation: boolean): void;
  deleteNote(id: number): DefaultNote | ConfirmationNote | null;
  editNote(id: number, { title, content }: INotePayload, confirmation?: boolean): ConfirmationNote | DefaultNote;
  markAsDone(id: number): void;
  getNoteById(id: number): DefaultNote | ConfirmationNote | undefined;
  getAllNotes(): (DefaultNote | ConfirmationNote)[];
  getNotesCount(): { all: number; uncompleted: number };
}
class TodoList implements ITodoList {
  notes: (DefaultNote | ConfirmationNote)[] = [];

  addNote(title: string, content: string, requiresConfirmation: boolean) {
    if (!title.trim() || !content.trim()) {
      throw new Error('Can`t be empty');
    }
    const id = this.notes.length + 1;
    if (requiresConfirmation === true) {
      const note = new ConfirmationNote(id, title, content);
      this.notes.push(note);
    } else {
      const note = new DefaultNote(id, title, content);
      this.notes.push(note);
    }
  }

  deleteNote(id: number): DefaultNote | ConfirmationNote | null {
    const note = this.notes.find(note => note.id === id);
    this.notes = this.notes.filter(note => note.id !== id);
    if (!note) {
      throw new Error('Note not found');
    } else return note;
  }
  editNote(id: number, { title, content }: INotePayload, confirmation?: boolean): ConfirmationNote | DefaultNote {
    const note = this.notes.find(note => note.id === id);
    if (!note) {
      throw new Error('Note not found');
    }
    const oldNote = { ...note } as ConfirmationNote | DefaultNote;

    note.editNote({ title, content }, confirmation);
    return oldNote;
  }

  markAsDone(id: number) {
    const note = this.notes.find(note => note.id === id);
    if (!note) {
      throw new Error('Note not found');
    }
    note.markAsDone();
  }
  getNoteById(id: number): DefaultNote | ConfirmationNote | undefined {
    const note = this.notes.find(note => note.id === id);
    if (!note) {
      throw new Error('Note not found');
    } else return note;
  }

  getAllNotes(): (DefaultNote | ConfirmationNote)[] {
    return this.notes;
  }

  getNotesCount(): { all: number; uncompleted: number } {
    return { all: this.notes.length, uncompleted: this.notes.filter(note => note.status === 'todo').length };
  }
}
class TodoListWithSearch extends TodoList {
  searchNotesByTitle(title: string): (DefaultNote | ConfirmationNote)[] {
    return this.notes.filter(note => note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }
  searchNotesByContent(content: string): (DefaultNote | ConfirmationNote)[] {
    return this.notes.filter(note => note.content.toLocaleLowerCase().includes(content.toLocaleLowerCase()));
  }
}
class TodoListWithSort extends TodoList {
  sortNotesByStatus(): (DefaultNote | ConfirmationNote)[] {
    return this.notes.sort((a, b) => a.status.localeCompare(b.status));
  }
  sortNotesByCreation(): (DefaultNote | ConfirmationNote)[] {
    return this.notes.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
  }
}
// const list = new TodoList();
// list.addNote('title', 'context', false);
// list.addNote('titleR', 'contextR', true);
// // console.log(list.deleteNote(1));

// console.log(list.editNote(2, { content: 'NewContent' }, true));
// console.log(list.getAllNotes());
