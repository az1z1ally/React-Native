import React from 'react'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>This is AppPro</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // In react-native the default cross-axis & main-axis are different from the web(because the default layout is from top to bottom)
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#fff'
    },
    darkText: {
        color: '#000'
    }
})

export default AppPro