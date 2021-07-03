import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import styles from "./styles";
import { RectButton, TextInput } from "react-native-gesture-handler";
import Logo from "../../Assets/Images/TemBilheteLogo.png";
import { useNavigation } from "@react-navigation/native";
import api from "../../Services/api";
import PageHeader from "../../Components/PageHeader";
import { ScrollView } from "react-native-gesture-handler";

const SendScrap = () => {
  const [message, setMessage] = useState("");
  const { navigate } = useNavigation();
  const [ra, setRa] = useState("");

  const getData = async () => {
    if (ra.length !== 9) {
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

  const HandleSendScrap = async () => {
    navigate("Home");
    Alert.alert("Enviando...");
    await api
      .get("email", {
        params: {
          subject: "Recado Aplicativo",
          message,
          ra: ra,
        },
      })
      .then(() => {
        Alert.alert("Recado enviado");
      })
      .catch(() => {
        Alert.alert("Não foi possível enviar o recado.\nTente Novamente! ");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PageHeader
          barTitle="Enviar Recado"
          headerTitle="Envie recados para escola por aqui."
        />

        <KeyboardAvoidingView style={styles.messageBlock}>
          <View style={styles.messageArea}>
            <Text style={styles.messageAreaTitle}>Enviar Recado</Text>
            <TextInput
              multiline={true}
              onChangeText={(text) => setMessage(text)}
              style={styles.messageAreaInput}
              placeholder="Digite aqui o seu recado..."
            />
            <RectButton onPress={HandleSendScrap} style={styles.sendButton}>
              <Text style={styles.sendButtonText}> Enviar</Text>
            </RectButton>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SendScrap;
