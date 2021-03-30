import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

export interface IUserStatProps {
    name: string,
    display: string
}

export default class UserStat extends React.Component<IUserStatProps> {
    render() {
        const { name, display } = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.statText}>{display}</Text>
                <Text style={styles.defaultText}>{name}</Text>       
            </View>       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    statText: {
        color: "#f8f8ff",
        fontSize: 20
    },

    defaultText: {
        color: "#D3D3D3",
        fontSize: 14
    }
});