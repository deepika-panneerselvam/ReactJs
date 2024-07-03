import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList } from "react-native";

type PopupModalProps = {
    msg: string | undefined | null;
    okHandler: () => void;
    modalOpen: boolean;
};

const PopupModal: React.FC<PopupModalProps> = ({ msg, okHandler, modalOpen }) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(modalOpen);
    }, [modalOpen]);

    const modalConfirm = () => {
        setModalVisible(false);
        okHandler();
    };

    const renderItem = ({ item }: { item: { id: string; title: string } }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {msg && <Text style={styles.modalText}>{msg}</Text>}

                    {/* <FlatList
                        data={}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    /> */}

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={modalConfirm}
                        accessibilityLabel="Confirm"
                    >
                        <Text style={styles.textStyle}>Confirm</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20, // Adjusted padding to make the modal smaller
        width: "80%", // Adjusted width to make the modal smaller
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 20,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    item: {
        backgroundColor: "pink",
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default PopupModal;

// const DATA = [
//     {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//         title: "First Item",
//     },
//     {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//         title: "Second Item",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Third Item",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d73",
//         title: "Fourth Item",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d74",
//         title: "Fifth Item",
//     },
// ];
