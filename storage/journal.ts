import { containsKey, getData, removeItem, storeData } from "../storage";
import { DataKeys, JournalDataKeys } from '../constants';
import { QuoteApiURL } from "../constants/api";
import { getDate } from "../utils/time";

import { DailyQuoteItem } from "../types/data";

export const getDailyQuoteKey = () => {
  return `${JournalDataKeys.DailyQuote}-${getDate()}`;
};

export const getDailyQuote = async (): Promise<DailyQuoteItem> => {
  const journalData = await getData(DataKeys.JournalData);
  const dailyQuoteKey = getDailyQuoteKey();
  return journalData[dailyQuoteKey];
};

export const initJournal = async (): Promise<Boolean> => {
  const hasJournalEntries = await containsKey(DataKeys.JournalData);

  if (!hasJournalEntries) {
    try {
      const dailyQuote = await fetchDailyQuote();
      const dailyQuoteKey = getDailyQuoteKey();
      // const journalEntries = await getJournalEntries();

      await storeData(DataKeys.JournalData, {
        [dailyQuoteKey]: dailyQuote, 
      });
      return true;
    } catch (error) {
      console.log('Fetching journal data error: ', error);
      return false;
    }
  } else {
    let dailyQuote = await getDailyQuote();
    if (!dailyQuote) {
      await loadDailyQuote();
    }
  }

  return false;
};

export const loadDailyQuote = async (): Promise<Boolean> => {
  try {
    const dailyQuote = await fetchDailyQuote();
    const dailyQuoteKey = getDailyQuoteKey();

    const journalData = await getData(DataKeys.JournalData);
    journalData[dailyQuoteKey] = dailyQuote;
    await storeData(DataKeys.JournalData, journalData);
    return true;
  } catch (error) {
    console.log('Error loading daily quote: ', error);
  }

  return false;
};

export const fetchDailyQuote = async (): Promise<DailyQuoteItem> => {
  const response = await fetch(QuoteApiURL);
  return await response.json();
};

// export const getJournalEntries = async (): Promise<JournalEntry[]> => {

// };

export const clearJournalEntries = async () => {
  await removeItem(DataKeys.JournalData);
};


