import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from '../services/api';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    render () {
        return (
            <View>
                <Text>
                    Página Main
                </Text>
            </View>
        );
    };
};