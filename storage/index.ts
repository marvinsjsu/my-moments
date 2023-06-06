import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const valueStr = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueStr);
  } catch (error: Error) {
    console.error(error.message);
  }
};

export const getData = async (key: string) => {
  try {
    const valueStr = await AsyncStorage.getItem(key);

    if (valueStr !== null) {
      return await JSON.parse(valueStr);
    }
  } catch (error: Error) {
    console.error(error.message);
  }
};

export const containsKey = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (error) {
    console.error(error.message);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error.message);
  }
};
