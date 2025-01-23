import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { Header } from "../../components/header";
import { strings } from "../../utilities/strings";
import { PrimaryTextInput } from "../../components/primaryTextInput";
import { PrimaryButton } from "../../components/primaryButton";
import { PhoneCellModel } from "../../data/models/PhoneCellModel";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import debounce from "lodash.debounce";
import { setContacts } from "../../utilities/asyncStore";
import { dataPresent } from "../../redux/reducers/contacts/contactsReducer";

interface Props {
  navigation: any;
  route: any;
}

const AddContact = (props: Props) => {
  const [nameText, setNameText] = React.useState("");
  const [phoneText, setPhoneText] = React.useState("");
  const [cityText, setCityText] = React.useState("");
  const [nameTextError, setNameTextError] = React.useState("");
  const [phoneTextError, setPhoneTextError] = React.useState("");
  const [cityTextError, setCityTextError] = React.useState("");

  const userContacts: PhoneCellModel[] = useAppSelector(
    (state: RootState) => state.contacts.data
  );
  const dispatch = useAppDispatch();

  const addContact = () => {
    if (nameText === "") {
      setNameTextError(strings.addContacts.nameError);
      return;
    }
    if (phoneText === "") {
      setPhoneTextError(strings.addContacts.phoneError);
      return;
    }
    if (nameTextError === "" && phoneTextError === "") {
      let newContact = {
        id: Date.now().toString(),
        name: nameText,
        phoneNumber: phoneText,
        city: cityText,
      };
      setContacts([...userContacts, newContact]);
      dispatch(dataPresent([...userContacts, newContact]));
      props.navigation.goBack();
    }
  };

  const handleNameChange = (text: string) => {
    const nameRegex = /^[a-zA-Z ]+$/;
    setNameText(text);
    if (!nameRegex.test(text)) {
      setNameTextError(strings.addContacts.nameError2);
    } else {
      setNameTextError("");
    }
  };

  const handlePhoneChange = (text: string) => {
    setPhoneText(text);
    debounceValidatePhone(text);
  };

  const debounceValidatePhone = debounce((phone: string) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneTextError(strings.addContacts.phoneError2);
    } else {
      setPhoneTextError("");
    }
  }, 500);

  useEffect(() => {
    // Clear debounced function on component unmount
    return () => {
      debounceValidatePhone.cancel();
    };
  }, []);

  const handleCityChange = (text: any) => {
    setCityText(text);
  };

  return (
    <View style={[styles.container]}>
      <Header
        headerText={strings.addContacts.title}
        onBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView>
        <PrimaryTextInput
          value={nameText}
          onChangeText={(text) => {
            handleNameChange(text);
          }}
          error={nameTextError}
          title={`${strings.addContacts.name} *`}
          placeholder="Enter Name"
          keyboardType={"default"}
          containerStyle={styles.input}
        />
        <PrimaryTextInput
          value={phoneText}
          onChangeText={(text) => {
            handlePhoneChange(text);
          }}
          error={phoneTextError}
          title={`${strings.addContacts.phoneNumber} *`}
          placeholder="Enter Phone Number"
          keyboardType={"default"}
          containerStyle={styles.input}
        />
        <PrimaryTextInput
          value={cityText}
          onChangeText={(text) => {
            handleCityChange(text);
          }}
          error={cityTextError}
          title={`${strings.addContacts.city}`}
          placeholder="Enter City"
          keyboardType={"default"}
          containerStyle={styles.input}
        />
        <PrimaryButton
          onPress={() => {
            addContact();
          }}
          title={"Add Contact"}
          buttonStyle={[styles.button]}
        />
      </ScrollView>
    </View>
  );
};

export default AddContact;
