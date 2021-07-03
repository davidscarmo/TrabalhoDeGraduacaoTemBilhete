import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  Text,
  Alert,
  AsyncStorage,
} from "react-native";
import { RectButton, State } from "react-native-gesture-handler";
import PageHeader from "../../Components/PageHeader";
import styles from "./styles";
import Select from "react-native-picker-select";
import api from "../../Services/api";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const DocumentRequests = () => {
  const [ra, setRa] = useState("");
  const { navigate } = useNavigation();
  const [documentType, setDocumentType] = useState("Teste");
  const [message, setMessage] = useState("");
  const getData = async () => {
    if (ra.length !== 9) {
      console.log("entrou");
      try {
        const value = await AsyncStorage.getItem("teste");
        if (value !== null) {
          setRa(value);
          console.log(value);
        }
      } catch (e) {
        //after add catch
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDocumentRequest = async () => {
    navigate("Home");
    Alert.alert("Enviando...");
    await api
      .get("email", {
        params: {
          documentType,
          subject: "Solicitação de Documento",
          message,
          ra: ra,
        },
      })
      .then(() => {
        Alert.alert("Documento Solicitado");
      })
      .catch(() => {
        Alert.alert(
          "Não foi possível solicitar o documento.\nTente Novamente! "
        );
      });
  };

  const placeholder = {
    label: "Escolha um documento...",
    value: null,
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <PageHeader
          barTitle="Solicitações"
          headerTitle="Peça documentos de maneira fácil por aqui"
        />
        <KeyboardAvoidingView behavior="height" style={styles.formBlock}>
          <View style={styles.formArea}>
            <Text style={styles.formAreaTitle}>Dados</Text>
            <Text style={styles.messageAreaLabel}>Tipo de Documento: </Text>
            <Select
              onValueChange={(value) => {
                setDocumentType(value);
              }}
              style={styles}
              placeholder={placeholder}
              useNativeAndroidPickerStyle={false}
              items={[
                {
                  label: "Atestado de Frequência",
                  value: "Atestado de Frequência",
                },
                { label: "Histórico Escolar", value: "Histórico Escolar" },
                {
                  label: "Transferência Escolar",
                  value: "Transferência Escolar",
                },
              ]}
            />

            <Text style={styles.messageAreaLabel}>Observação: </Text>
            <TextInput
              multiline={true}
              onChangeText={(text) => setMessage(text)}
              style={styles.messageAreaInput}
              placeholder="Digite aqui a sua observação..."
            />
            <RectButton
              onPress={handleDocumentRequest}
              style={styles.sendButton}
            >
              <Text style={styles.sendButtonText}> Pedir Documento</Text>
            </RectButton>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default DocumentRequests;
