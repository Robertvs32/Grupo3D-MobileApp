import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loader(){
    return(
        <View style={styles.containerLoader}>
            <ActivityIndicator
                style={styles.loader}
                size="large"
                color="rgba(255, 102, 0, 1)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLoader: {
        backgroundColor: 'rgba(65, 65, 65, 0.49)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        elevation: 10
    },
    loader: {
        transform: [
            { scale: 2}
        ]
    }
})