import {create} from "zustand";
import {devtools,persist} from 'zustand/middleware'
import axios from 'axios'
const LandStore = (set) => ({
  lands: [],
  setLands: (lands) => set(()=>({ lands })),
  addLand: (land) => set((state) => ({ lands: [land, ...state.lands] })),
  updateLand:(index,updatedLand)=>set((state)=>{
    const lands=[...state.lands];
    lands[index]=updatedLand;
    return {lands};
  }),
  deleteLand:async(id)=>{
    await axios.delete(`land/delete/${id}`);
    set((state)=>({
    lands:state.lands.filter(land=>land._id!=id)
  }))}
})
const useLandStore=create(
    devtools(
        persist(LandStore,{
            name:'lands', //localStorage Key
        }
        )
    )
)
export default useLandStore;





//create used to zustand store
//persist is used to store it in localStorage
//devtools is used to access redux toolkit in zustand created store
//const LandStore = (set) => ({ zustand gives you set to  which lets you update the state
// Zustand passes the current state object (state) into your updater function so you can:
// Read the current state
// Use it to derive new state
// Return a new updated state

// Instead of destructuring all state like:

// const { lands, addLand } = useLandStore();
// Use selectors for performance optimization:

// const lands = useLandStore((state) => state.lands);
// const addLand = useLandStore((state) => state.addLand);
//Prevents unnecessary re-renders.