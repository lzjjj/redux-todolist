// import * as types from '../Constants/ActionTypes'
export const addItem = (item)=>{return  { type: "add",item }};
export const checkItem = (itemId,isCheck)=>{return  { type: "check",itemId,isCheck }};
export const changeStatus = (status)=>{return  { type: "status",status }};
export const editItemContent = (itemId,content)=>{return  { type: "edit",itemId,content }};



