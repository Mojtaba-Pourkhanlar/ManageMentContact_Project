import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    setContacts: () => {},
    setFilteredContacts: () => {},
    contacts: [],
    filteredContacts: [],
    groups: [],
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
})