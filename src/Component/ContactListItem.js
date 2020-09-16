import React from 'react';

const ContactListItem = ({ el, delCont }) => (
  <li>
    {el.name}: {el.number}
    <button onClick={delCont}>Delete</button>
  </li>
);

export default ContactListItem;
