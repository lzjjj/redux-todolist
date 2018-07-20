import * as types from '../Constants/ActionTypes'
export const addItem = (item)=>{return  { type: types.ADD,item }};
export const checkItem = (itemId,isCheck)=>{return  { type: types.CHECK,itemId,isCheck }};
export const changeStatus = (status)=>{return  { type: types.STATUS,status }};
export const editItemContent = (itemId,content)=>{return  { type: types.EDIT,itemId,content }};



