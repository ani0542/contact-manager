import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ContactItem = ({
  contact: { id, name, salary },
  index,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      {index + 1}.<span className="name mr-auto ml-2">{name}</span>
      <span className="salary mr-3">${salary}</span>
      <button onClick={() => handleEdit(id)} className="myBtn edit">
        <MdEdit />
      </button>
      <button onClick={() => handleDelete(id)} className="myBtn delete">
        <MdDelete />
      </button>
    </li>
  );
};

export default ContactItem;
