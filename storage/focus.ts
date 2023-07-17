import { containsKey, getData, removeItem, storeData } from "../storage";
import { DataKeys, JournalDataKeys } from '../constants';

import { FocusItem } from "../types/data";

import { getDate } from "../utils/time";


export const getFocusKey = () => {
  return `${JournalDataKeys.FocusEntries}-${getDate()}`;
};

export const getFocusEntries = async (): Promise<FocusItem[]> => {
  try {
    const focusData = await getData(DataKeys.FocusData);
    const dailyFocusKey = getFocusKey();
    return focusData[dailyFocusKey];
  } catch (error: Error) {
    console.log('Failed to get focus entries - ', error.message);
    return [];
  }
};

export const initFocus = async (): Promise<Boolean> => {
  const hasFocusEntries = await containsKey(DataKeys.FocusData);

  if (!hasFocusEntries) {
    try {
      const dailyFocusKey = getFocusKey();
      await storeData(DataKeys.FocusData, {
        [dailyFocusKey]: [], 
      });
      return true;
    } catch (error) {
      console.log('Fetching focus data error: ', error);
      return false;
    }
  } 

  return false;
};

export const addFocusItem = async (focusItem: FocusItem): Promise<FocusItem[]> => {
  let focusEntries = await getFocusEntries();

  if (focusEntries) {
    focusEntries.unshift(focusItem);
  } else {
    focusEntries = [focusItem];
  }

  const dailyFocusKey = getFocusKey();
  await storeData(DataKeys.FocusData, {
    [dailyFocusKey]: focusEntries,
  });
  
  return focusEntries;
};

export const clearFocusEntries = async () => {
  await removeItem(DataKeys.FocusData);
};

