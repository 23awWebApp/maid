// types.ts
export type RootStackParamList = {
    MainPage: undefined;
    TimeSettingPage: { item: string };
    CountdownPage: { hours: number; minutes: number; item: string };
};
