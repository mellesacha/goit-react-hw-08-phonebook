
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container, Title } from "./App.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOperation";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
  
   
};

