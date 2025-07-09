import { Text, View, Pressable } from 'react-native'
import React from 'react'

export default function BackAndNextBtns({ handleNextStep, handlePreviousStep }) {
    return (
    <View style=
        {{ 
            flexDirection: 'row', 
            justifyContent: "space-between", 
            width: '100%',
            marginTop: 20
        }}>
            <Pressable
                onPress={handlePreviousStep}
                style={{ 
                backgroundColor: 'rgb(0,0,112)', 
                paddingVertical: 10, 
                paddingHorizontal: 20, 
                borderRadius: 5,
                gap: 10,
                flexDirection: 'row',
                }}
            >
                <Text style={{ fontWeight: "700", color: "#fff", textAlignVertical: "center" }}>←</Text>
                <Text style={{ color: '#fff', fontSize: 20 }}>
                    Back
                </Text>
            </Pressable>
            <Pressable
                onPress={handleNextStep}
                style={{ 
                backgroundColor: 'rgb(0,0,112)', 
                paddingVertical: 10, 
                paddingHorizontal: 20, 
                borderRadius: 5,
                gap: 10,
                flexDirection: 'row',
                }}
            >
                <Text style={{ color: '#fff', fontSize: 20}}>
                    Next
                </Text>
                <Text style={{ fontWeight: "700", color: "#fff", textAlignVertical: "center" }}>→</Text>
            </Pressable>
        </View>
  )
};