import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface hydrationState {
        totalWater : number,
        totalWaterInPercentage : number,

}

const initialState  : hydrationState = {
    totalWater : 0,
    totalWaterInPercentage : 0
};

export const hydrationSlice = createSlice({
    name  : "hydration",
    initialState,
    reducers : {
        setHydration : (state , action : PayloadAction<number>) => {
                state.totalWater = action.payload;
        } ,
        setHydrationInPercent : (state , action : PayloadAction<number>) => {
                state.totalWaterInPercentage = action.payload;
        }

    }
});

export const { setHydration , setHydrationInPercent } = hydrationSlice.actions;
export default hydrationSlice.reducer;