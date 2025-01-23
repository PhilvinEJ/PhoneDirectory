import AsyncStorage from "@react-native-async-storage/async-storage";
import { PhoneCellModel } from "../data/models/PhoneCellModel";

enum LocalStorageKeys {
  CONTACT_DATA = "CONTACT_DATA",
}

export const setContacts = async (contacts?: PhoneCellModel[]) => {
  let localContactsData: PhoneCellModel[] | undefined = [];
  if (contacts !== null) {
    localContactsData = contacts;
  }
  try {
    await AsyncStorage.setItem(
      LocalStorageKeys.CONTACT_DATA,
      JSON.stringify(localContactsData)
    );
  } catch (error) {
    console.log("setContacts", error);
  }
};

export const fetchContacts = async () => {
  try {
    const value = await AsyncStorage.getItem(LocalStorageKeys.CONTACT_DATA);
    if (value !== null) {
      const contactsData: PhoneCellModel[] = JSON.parse(value);
      return contactsData;
    }
  } catch (error) {
    return "";
  }
};
