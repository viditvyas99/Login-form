import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('auth/login',async(credentials,{rejectWithValue})=>{
    try {
        const response= await axios.post('https://dummyjson.com/user/login',{
            username:credentials.username,
            password:credentials.password,

        })
        // console.log(credentials)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
}
)

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        loading:false,
        error:null,
    },
    reducers:{
        logout:(state)=>{
            state.user=null
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload
            console.log(state.user)
            
        })
        .addCase(login.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})

export const {logout} =authSlice.actions
export default authSlice.reducer