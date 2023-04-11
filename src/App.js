import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as  Router,Routes,Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header.js'
import AddContact from './components/AddContact.js'
import ContactList from './components/ContactList.js'

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContact] = useState([])

  const addContactHandler = (contact) => {
    setContact([...contacts,{id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContact(newContactList)
  }

  // useEffect(() => {

  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveContacts) {
  //     setContact(retriveContacts);
  //   }

  // }, []);

 
  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))

  }, [contacts]);

  

  return (
    <div className='ui container'>
      {/* <Router>
        <Header />
        <Switch>
        <Route  path='/'  
        exact
        render={(props)=>(<ContactList
        {...props}
        contacts = { contacts } 
        getContactId= { removeContactHandler }/>
        )}/>
        <Route path="/add"
        render={(props)=>(
          <AddContact 
          {...props}
          addContactHandler = { addContactHandler }
          />
        )}
        />
        
        </Switch>
        
      </Router> */}



      <Router>
        <Header />
        <Routes>
          <Route path="/add" 
          element = {<AddContact addContactHandler = { addContactHandler } />} />
          <Route path='/' 
          element = {<ContactList contacts = { contacts } 
          getContactId= { removeContactHandler }/>} />  
        </Routes>   
      </Router>
    </div>
  );
}

export default App;
