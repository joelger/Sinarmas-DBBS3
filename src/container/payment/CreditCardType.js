import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import AccountList from '../../component/AccountList'

class CreditCardType extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            accounts:
                [
                    { number: '', name: 'AMERICAN EXPRESS' },
                    { number: '', name: 'MASTERCARD' },
                    { number: '', name: 'VISA' },
                    { number: '', name: 'DISCOVER' },
                ],
        };
    }

    updateSearch = search => {
        this.setState({ search });
    }

    setChosenDestination = (number, name) => {
        const { navigation, route } = this.props
        route.params.onSelectAccount(name, number)
        navigation.goBack();
    }

    render() {

        const { search, accounts } = this.state;

        return (

            <View>
                <View style={styles.subView}>
                    <View style={styles.subViewSearchBar}>
                        <SearchBar
                            onChangeText={this.updateSearch}
                            value={search}
                            platform="android"
                            placeholder="Search type"
                        />
                    </View>
                </View>
                <AccountList
                    accounts={accounts}
                    setChosenAccount={this.setChosenDestination}
                    style={styles.list}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subView: {
        width: '100%',
        flexDirection: 'row',
    },
    subViewSearchBar: {
        flex: 1,
    },
    iconImage: {
        width: 35,
        height: 35,
    },
    list: {
        flex: 1,
    },
    buttonAdd: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10,
    },
    imageAdd: {
        height: 22,
        width: 22,
    }
})

export default CreditCardType;
