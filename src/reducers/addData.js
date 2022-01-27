import { useStore } from "react-redux";

const regForEmail = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const regForName = RegExp(/^[A-Za-z]+/);
const regForAge = RegExp(/^[0-9]+$/);
const regForPass = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);
const initialState={formData:[]}

export const addData =(state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case "add":
            if(action.payload.name==''||action.payload.email==''||action.payload.age==''||action.payload.pass==''||action.payload.Cpass==''){
                alert("please Fill all the fields")
            }
            else if(!regForName.test(action.payload.name)){
                alert("please watch the name")
            }
            else if(!regForEmail.test(action.payload.email)){
                alert("please watch the email")
            }
            else if(!regForAge.test(action.payload.age)){
                alert("please watch the age")
            }
            else if(!regForPass.test(action.payload.pass)){
                alert("please watch the pass")
            }
            else if(action.payload.pass!=action.payload.cPass){
                alert("no match")
            }
            else{
                alert("Success")
                return {formData:[...state.formData,action.payload]}
            }
        default: return{formData:[state.formData]}
    }
}