import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    // const contacts = [{
    //     id:"1",
    //     "name":"ulaganathan",
    //     "email":"ulaga@gmail.com"
    // }]

    const renderContactList = props.contacts.map((contact) => {
        return (

            <ContactCard contact = {contact} clickHandler = { deleteContactHandler } key= {contact.id} />
            
        )
    }
    )

    return (
        <div className="main">
            <h2>
                Contact list
                
            </h2>
            <Link to="/add">
                <button className="ui button blue right corner">Add Contact</button>
            </Link>
            
        
        <div className="ui celled list">
            { renderContactList }
        </div>
        </div>

    )
}

export default ContactList;