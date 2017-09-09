import React from 'react-native';

const NfcNdefReactNative = React.NativeModules.NfcNdefReactNative;

export const readTag = NfcNdefReactNative.readTag;
export const reset = NfcNdefReactNative.reset;
export const writeTag = NfcNdefReactNative.writeTag;
export const getTagId = NfcNdefReactNative.getTagId;
