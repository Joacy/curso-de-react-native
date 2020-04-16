import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default class Main extends Component {
    state = {
        docs: []
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ docs });
    };

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={() => { }}>
                <Text>
                    Acessar
                </Text>
            </TouchableOpacity>
        </View>
    );

    render () {
        const { docs } = this.state;

        return (
            <View>
                <FlatList
                    data={docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    };
};