import { Image, StyleSheet } from "react-native"

export default function Icon({source}){
    return(
        <Image
            source={source}
            style={styles.icon}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    }
})

