import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScreenStackHeaderRightView } from "react-native-screens";


const { width, height } = Dimensions.get("screen");

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex middle>
        <StatusBar hidden />
              <Block flex={0.75} middle style={styles.logoConect}>
                
                <Block center>
                  <Image source={Images.TruliTxt} />
                </Block>
                <Block row style={{ marginTop: theme.SIZES.BASE }}>
                </Block>
              </Block>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Senha"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Esqueceu sua senha?
                        </Text>
                      </Block>
                    </Block>
                   
                    <Block middle>
                      <Button color={"#F5591F"} style={styles.createButton} onPress={() => navigation.navigate("App")}>
                        <Text bold size={14} color={"#fff"}>
                          ENTRAR
                        </Text>
                      </Button>
                    </Block>


                    
                    <Block row style={styles.regis}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Não tem uma conta? Registre-se
                        </Text>
                      </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F5591F",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  logoConect: {
    width: 500,
    backgroundColor: "#F5591F",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#F5591F",
    borderBottomLeftRadius: 250,
    marginBottom:40,
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: "#F5591F",
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 190,
    paddingTop: 13,
    paddingBottom: 30,
  },
  regis: {
    paddingLeft: 100,
    marginTop: 19,
  },
  createButton: {
    borderRadius: 30,
    width: width * 0.75,
    marginTop: 25,
    color: "#F5591F",
    backgroundColor: "#F5591F",
  }
});


export default Onboarding;
