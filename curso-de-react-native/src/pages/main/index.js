import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

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
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.productButton} onPress={() => { }}>
                <Text style={styles.productButtonText}>
                    Acessar
                </Text>
            </TouchableOpacity>
        </View>
    );

    render () {
        const { docs } = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    };
};