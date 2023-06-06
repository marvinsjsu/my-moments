import React, { useState } from "react";
import { View, Modal as RNModal, StyleSheet, ModalProps as RNModalProps } from "react-native";

import PressableText from "./PressableText";

type PressTextProps = {
  closeComponent?: React.FC<{ onPress: () => void }>,
  openComponent?: React.FC<{ onPress: () => void }>,
  closeText?: string,
  openText?: string,
  children: React.ReactNode,
  animationType?: string,
};

type ModalProps = RNModalProps & PressTextProps;

export default function Modal({
  children,
  animationType = "slide",
  closeComponent: CloseComponent,
  openComponent: OpenComponent,
  closeText = "Close",
  openText = "Open",
}: ModalProps) {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <>
      <RNModal
        visible={isModalVisible}
        animationType={animationType}
      >
        <View style={styles.modalView}>
          {children}
          {CloseComponent
            ? <CloseComponent onPress={() => setIsModalVisible(false)} />
            : <PressableText text={closeText} onPress={() => setIsModalVisible(false)} />
          }
        </View>
      </RNModal>
      {OpenComponent
        ? <OpenComponent onPress={() => setIsModalVisible(true)} />
        : <PressableText text={openText} onPress={() => setIsModalVisible(true)} />
      }
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
