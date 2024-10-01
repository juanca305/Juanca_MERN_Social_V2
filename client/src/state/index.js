import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  ///****Added */
  users: [],
  //URL: "https://sociopedia-backend-f8d5.onrender.com",
  URL: "https://juanca-mern-social-app.onrender.com",
};

//REDUCERS => Basically are functions I use when I need
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },

    //********** Added */
    setUsers: (state, action) => {
      state.users = action.payload.users;
  },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setUsers } =
  authSlice.actions;
export default authSlice.reducer;
