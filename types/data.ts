

export type Difficulty = "easy" | "normal" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";

export type WorkoutItemForm = {
  name: string,
  duration: string,
  type?: string,
  reps?: string,
};

export interface Workout {
  slug: string,
  name: string,
  duration: number,
  difficulty: Difficulty,
  sequence: SequenceItem[],
};

export interface SequenceItem {
  slug: string,
  name: string,
  type: SequenceType,
  reps?: number,
  duration: number,
}

export type FormDataItem = {
  name: string,
  value: string,
};

export type GratitudeFormData = {
  gratitude1: string,
  gratitude2: string,
  gratitude3: string,
};

export type JournalFormData = {
  journal: string,
};

export type SleepFormData = {
  sleepTime: string,
  wakeTime: string,
  mood: string,
};

export type DailyQuoteItem = {
  quoteText: string,
  quoteAuthor: string,
  senderName?: string,
  senderLink?: string,
  quoteLink?: string,
};

