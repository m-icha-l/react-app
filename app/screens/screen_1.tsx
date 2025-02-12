import React, { useState } from "react";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();

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
            >Create an accont</Text>

            <Text style={{
                fontSize: 16,
                marginBottom: 5
            }}
            >Provide needed information</Text>
            
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
                <Ionicons name="person-outline" size={20} color="black"/>

                <TextInput style ={{
                    flex: 1,
                    marginLeft: 10
                }}
                    placeholder="Username"
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
                <Ionicons name="mail-outline" size={20} color="black"/>

                <TextInput style ={{
                    flex: 1,
                    marginLeft: 10
                }}
                    placeholder="Emile"
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
                    placeholder="Repeat your password"
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
                    Have an account? </Text>

                <Pressable
                  onPress={() => router.push("/")}
                >
                    <Text style = {{
                        color:"#FFA500",
                    }} 
                    >Log in</Text>
                </Pressable>
            </View>
        </View>
    );
}
