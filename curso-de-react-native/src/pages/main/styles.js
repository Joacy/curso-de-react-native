import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    list: {
        padding: 20,
    },

    productContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24,
    },

    productButton: {
        height: 42,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#da552f',
        backgroundColor: 'transparent',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    productButtonText: {
        fontSize: 16,
        color: '#da552f',
        fontWeight: 'bold',
    },
});
