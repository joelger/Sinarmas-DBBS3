import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import AccountList from '../../component/AccountList'

class InsuranceDestination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            accounts:
                [
                    { number: '346346373', name: 'LIFE' },
                    { number: '087967675', name: 'PROPERTY' },
                    { number: '176489329', name: 'FIRE' },
                    { number: '473892827', name: 'MARINE' },
                ],
        };
    }

    updateSearch = search => {
        this.setState({ search });
    }

    setChosenDestination = (number, name) => {
        const { navigation, route } = this.props
        route.params.onSelectDestination(name, number)
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
                            placeholder="Search destination"
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

export default InsuranceDestination;
