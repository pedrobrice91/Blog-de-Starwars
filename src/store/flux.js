import { useParams } from "react-router-dom";

const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      contacts:[
      {name:"", 
      phone:"",
      email:"",
      address:""}
    ],
      
    },
    actions: {
      getContacts: () => {
        fetch("https://www.swapi.tech/api", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          .then(data => console.log(data))
          .catch(err => console.error(err))

        })
          .then((response) => response.json())
          .then((data) => {
            setStore({
            contacts:data.contacts
            });
          })
          .catch((error) => console.log(error));
      },
      createContact: (contact) => {
        console.log(contact)
        fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/contacts', {
          method:"POST",
          headers:{
            "content-type":"application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(contact)
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          })
        .catch((error) => console.log(error));
      },
      deleteContact: (id) => {
        console.log()
        fetch('https://playground.4geeks.com/contact/agendas/pedrobriceno/'+id, {
          method: "DELETE"
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          })
        .catch((error) => console.log(error));
      ;
    },
  }
};
}
export default getState;