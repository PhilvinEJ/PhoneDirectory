import {
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import styles from "./styles";
import PhoneUserCell from "../../components/cells/phoneUserCell";
import { SearchHeader } from "../../components/header";
import SvgImage from "../../utilities/svgImages";
import { colors } from "../../themes/colors";
import { widthRatio } from "../../utilities/dimensions";
import { MainScreens } from "../../navigation/mainStack";
import { PhoneCellModel } from "../../data/models/PhoneCellModel";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import { fetchContacts } from "../../utilities/asyncStore";
import {
  dataPresent,
  dataEmpty,
} from "../../redux/reducers/contacts/contactsReducer";

interface Props {
  navigation: any;
  route: any;
}

const Home = (props: Props) => {
  const [searchText, setSearchText] = React.useState("");
  const userContacts: PhoneCellModel[] = useAppSelector(
    (state: RootState) => state.contacts.data
  );
  const isDataPresent = useAppSelector(
    (state: RootState) => state.contacts.isDataPresent
  );
  const [loading, setLoading] = React.useState(true);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getContacts = async () => {
      const contacts = await fetchContacts();
      if (Array.isArray(contacts)) {
        let sortedData = contacts.sort((a, b) => a.name.localeCompare(b.name));
        console.log(`Sorted contacts: ${JSON.stringify(sortedData)}`);
        dispatch(dataPresent(sortedData));
      } else {
        dispatch(dataEmpty([]));
      }
      setLoading(false);
    };

    getContacts();
  }, []);

  const searchContacts = async (text?: string) => {
    const userContacts = await fetchContacts();
    if (Array.isArray(userContacts)) {
      let sortedData = userContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      console.log(
        `Sorted search contacts: ${JSON.stringify(sortedData)} | ${text}`
      );
      if (text === "" || text === undefined) {
        console.log(
          `Filtered empty search contacts: ${JSON.stringify(sortedData)}`
        );
        dispatch(dataPresent(sortedData));
      } else {
        console.log(`Filtered search contacts: ${JSON.stringify(sortedData)}`);
        let filteredData: PhoneCellModel[] | undefined;
        if (text.match(/^\d+$/)) {
          filteredData = sortedData.filter((item) =>
            item.phoneNumber.includes(text)
          );
        } else {
          filteredData = sortedData.filter((item) => item.name.includes(text));
        }

        if (filteredData.length === 0) {
          dispatch(dataEmpty([]));
        } else {
          dispatch(dataPresent(filteredData));
        }
      }
    } else {
      dispatch(dataEmpty([]));
    }
    setLoading(false);
  };

  return (
    <View style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SearchHeader
        value={searchText}
        onChangeText={(text) => {
          console.log(text);
          setSearchText(text);
          searchContacts(text);
        }}
        placeholder="Search Contacts"
        containerStyle={styles.searchContainer}
        textStyle={styles.searchTextInput}
        keyboardType={"web-search"}
      />
      {!isDataPresent ? (
        <View style={[styles.emptyListContainer]}>
          <Text style={[styles.emptyListText]}>No Contacts Available</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={[styles.flatListStyle]}
          data={userContacts}
          renderItem={({
            index,
            item,
          }: {
            index: number;
            item: PhoneCellModel;
          }) => <PhoneUserCell key={index} index={index} item={item} />}
          keyExtractor={(_item, index) => `${index}`}
        />
      )}
      <TouchableOpacity
        style={[styles.boxElevationStyle, styles.addContactButtonContainer]}
        onPress={() => {
          props.navigation.navigate(MainScreens.AddContact);
        }}
      >
        <SvgImage
          icon={"add"}
          strokeColor={colors.white}
          width={40 * widthRatio}
          height={40 * widthRatio}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
