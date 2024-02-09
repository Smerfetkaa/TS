type NoteStatus = 'todo' | 'done';
type fieldsToSort = 'status' | 'creationDate';
type fieldsToSearch = 'title' | 'content';
interface IDefaultNote {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  editDate: Date;
  status: NoteStatus;
  markAsDone(): void;
}
class DefaultNote implements IDefaultNote {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  editDate: Date;
  status: NoteStatus;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.creationDate = new Date();
    this.editDate = new Date();
    this.status = 'todo';
  }

  markAsDone() {
    this.status = 'done';
  }
}
class ConfirmationNote extends DefaultNote {
  type = 'required';
  requiresConfirmation: boolean = true;

  confirmation(value: boolean) {
    if (value) return true;
    else return false;
  }
}
class TodoList {
  notes: (DefaultNote | ConfirmationNote)[];

  constructor() {
    this.notes = [];
  }

  addNote(title: string, content: string, requiresConfirmation: boolean) {
    const id = this.notes.length + 1;
    if (requiresConfirmation === true) {
      const note = new ConfirmationNote(id, title, content);
      this.notes.push(note);
    } else {
      const note = new DefaultNote(id, title, content);
      this.notes.push(note);
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  editNote(id: number, confirmation: boolean, title?: string, content?: string, status?: NoteStatus) {
    const note = this.notes.find(note => note.id === id);
    if ((note instanceof ConfirmationNote && note.confirmation(confirmation)) || note instanceof DefaultNote) {
      if (title) note.title = title;
      if (content) note.content = content;
      if (status === 'done') note.markAsDone();
      note.editDate = new Date();
    }
  }

  getNoteById(id: number): DefaultNote | ConfirmationNote | undefined {
    return this.notes.find(note => note.id === id);
  }

  getAllNotes(): (DefaultNote | ConfirmationNote)[] {
    return this.notes;
  }

  getNotesCount(): { all: number; uncompleted: number } {
    return { all: this.notes.length, uncompleted: this.notes.filter(note => note.status === 'todo').length };
  }

  searchNotesByKeyword(keyword: string, el: fieldsToSearch): (DefaultNote | ConfirmationNote)[] {
    if (el === 'title')
      return this.notes.filter(note => note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
    else return this.notes.filter(note => note.content.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }

  sortNotes(sortBy: fieldsToSort): (DefaultNote | ConfirmationNote)[] {
    if (sortBy === 'status') return this.notes.sort((a, b) => a.status.localeCompare(b.status));
    else return this.notes.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
  }
}

function searchNotes(keyword: string, todoList: TodoList, el: fieldsToSearch): (DefaultNote | ConfirmationNote)[] {
  return todoList.searchNotesByKeyword(keyword, el);
}

function sortNote(todoList: TodoList, sortBy: fieldsToSort) {
  return todoList.sortNotes(sortBy);
}
