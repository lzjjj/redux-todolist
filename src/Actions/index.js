import * as types from '../Constants/ActionTypes'
export const addItem = (item)=>{return  { type: types.ADD,item }};
export const checkItem = (item)=>{return  { type: types.CHECK,item}};
export const changeStatus = (status,todoList)=>{return  { type: types.STATUS,status,todoList }};
export const editItemContent = (item)=>{return  { type: types.EDIT,item }};



