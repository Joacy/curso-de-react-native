import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default class Main extends Component {
    state = {
        productInfo: {},
        docs: [],
        page: 1,
    }

    componentDidMount () {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get('/products', {
            params: {
                page,
            }
        });

        const { docs, ...productInfo } = response.data;

        this.setState({
            docs: [...this.state.docs, ...docs],
            productInfo,
            page
        });
    };

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.page) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

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
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.3}
                />
            </View>
        );
    };
};