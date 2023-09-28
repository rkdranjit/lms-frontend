import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
   courseList: []
}

export const getAllCourses = createAsyncThunk("/course/getAllCourses", async (data) => {
    try{
        const response = axiosInstance.get("/courses" , data);
        toast.promise(response,{
            loading:'Wait ! fetching all courses',
            success: (data) => {
                return data?.data?.message;
            },
            error:'failed to load courses'
        });
        return await response;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})

const courseSlice = createSlice({
    name : "course",
    initialState,
    reducers : {},
    extraReducers : ( ) => {
      
    }
});

export default courseSlice.reducer;