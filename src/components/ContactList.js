import React from "react";
import ContactItem from "./ContactItem";
import { MdDelete } from "react-icons/md";

const ContactList = ({ contacts, handleClear, handleDelete, handleEdit }) => {
  const contactList = contacts.length ? (
    contacts.map((contact, index) => (
      <ContactItem
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        contact={contact}
        index={index}
        key={contact.id}
        id={contact.id}
      />
    ))
  ) : (
    <h4 className="text-center">No contacts here</h4>
  );
  const clearBtn = contacts.length ? (
    <button onClick={handleClear} className="btn btn-danger my-3">
      Clear Contacts
      <MdDelete className="deleteBtn" />
    </button>
  ) : null;
  return (
    <>
      <ul className="list-group">{contactList}</ul>
      {clearBtn}
    </>
  );
};

export default ContactList;
