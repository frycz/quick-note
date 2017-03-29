import * as React from 'react';
import { merge } from 'lodash';

import Note from './note';

interface INotesListProps {
    notes: Array<any>
}

interface NotesListState {

}

class NotesList extends React.Component<INotesListProps, NotesListState> {
  constructor(props, context) {
      super(props, context);
      this.state = {

      };
  }

  public render() {
    return (
        <div>
            {this.props.notes.map(note =>
                <Note
                    key={ note.id }
                    note={ note }>
                </Note>
            )}
        </div>
    );
  }
}

export default NotesList;