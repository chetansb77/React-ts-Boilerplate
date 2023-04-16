import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = (type: string): any => {
  switch (type) {
    case 'info': {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    }
    case 'warning': {
      return {
        position: 'absolute',
        color: 'red',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '4px solid red',
        boxShadow: 24,
        p: 4,
      };
    }
    default: {
      // statements;
      return {};
    }
  }
};

interface DialogMessage {
  title?: string;
  message?: string;
}

interface DialogBoxProps {
  type: string;
  message: DialogMessage;
  onCloseCallback: () => any;
}

/**
* Dialog Box React functional component
* @summary
    Supports two type of dialog box
     1. Info
     2. Warning

* @prop {string} type - type value `info|warning`
* @prop {json object} message - Dialog box message - {
  title: "title message",
  message: "message value"
}
* @prop {function} onCloseCallback - Callback function on close
*/
function DialogBox({
  type,
  message,
  onCloseCallback,
}: DialogBoxProps): JSX.Element {
  return (
    <Modal
      open
      onClose={onCloseCallback}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style(type)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {message.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {message.message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default DialogBox;
export type { DialogMessage };
