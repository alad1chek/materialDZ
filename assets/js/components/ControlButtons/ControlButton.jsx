import React from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ControlButton = props => {
  const edit = <Tooltip id="edit_tooltip">{props.purpose}</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={edit}>
      <Button
        bsStyle={props.bsStyle}
        type="button"
        bsSize="xs"
        onClick={props.handleClick}
      >
          {props.link ? <NavLink to={props.link}><i className={props.buttonClass} /></NavLink> : <i className={props.buttonClass} />}

      </Button>
    </OverlayTrigger>
  );
};

export default ControlButton;
