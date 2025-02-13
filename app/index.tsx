import React, { useState } from "react";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();

    const [new_input, set_new_input] = useState("");
    const [input_list, set_input_list] = useState<string[]>([]);

    return (
        <View style ={{
            backgroundColor: "white",
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: "center"
        }}>
            
            <Text style={{
                fontSize: 32,
                fontWeight: "bold",
                marginBottom: 5
            }}
            >Login</Text>

            <Text style={{
                fontSize: 16,
                marginBottom: 5
            }}
            >Please login to continue</Text>
            
            <View style = {{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                paddingHorizontal: 15,
                marginBottom: 15,
                height: 50
            }}>
                <Ionicons name="mail-outline" size={20} color="black"/>

                <TextInput style ={{
                    flex: 1,
                    marginLeft: 10
                }}
                    placeholder="Emile"
                    onSubmitEditing={(event) => set_new_input(event.nativeEvent.text)}
                    onChange={() => console.log("changed")}
                    onEndEditing={() => console.log("ended editing")}
                />
            </View>

            <View style = {{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "gray",
                paddingHorizontal: 15,
                marginBottom: 15,
                height: 50
            }}>
                <Ionicons name="lock-closed" size={20} color="black"/>
                <TextInput 
                    placeholder="Password"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style ={{
                marginTop: 30,
                backgroundColor: "#FFA500",
                paddingVertical: 15,
                borderRadius: 25,
                alignItems: "center",
            }}
                onPressOut={() => console.log(input_list)}
                
                onLongPress={() => set_input_list([...input_list,"\n " + new_input])}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        

            <View style = {{
                flexDirection: "row",
                position: "absolute",
                bottom: 30,
                alignSelf: "center"
            }}>
                <Text style = {{
                    fontSize: 14,
                    color:"gray"
                }}>
                    Don't have an account? </Text>

                <Pressable
                onPress={() => router.navigate("./screens/screen_1")}
                >
                    <Text style = {{
                        color:"#FFA500",
                    }} 
                    >Sign in</Text>
                </Pressable>
                {input_list.map((item, index) => (<Text key={index}>{item}</Text>))}
            </View>
        </View>
    );
}
