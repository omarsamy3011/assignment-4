import fs from "fs"

const users = JSON.parse(fs.readFileSync("D:/learn js/second-month/assigment4/users.json","utf-8"))

export const addUser =(name,age,email)=>{
    let target = users.find(x=>x.email == email)
    if(!target){
        let id = users.length +1
        users.push({name,age,email,id})
        fs.writeFileSync("D:/learn js/second-month/assigment4/users.json",JSON.stringify(users))
        return "user is added"
    }
    else return "email is already found"
}
export const updateUser=(name,age,email,id)=>{
    let target = users.find(x=>x.id==id)
    if(target){
        if(name) target.name=name
        if(age) target.age=age
        if(email) target.name=email
        fs.writeFileSync("D:/learn js/second-month/assigment4/users.json",JSON.stringify(users))
        return "user is updated"
    }else return "not found user"
}
export const deleteUser=(id)=>{
    let target = users.findIndex(x=>x.id==id)
    if(target ==-1)return "not found user"
    else {
        users.splice(target,1)
        fs.writeFileSync("D:/learn js/second-month/assigment4/users.json",JSON.stringify(users))
        return "deleted successfully"
    }
}
export const getUser=(name)=>{
    let target = users.find(x=>x.name==name)
    if(!target)return {message:"not found"}
    else return target
}
export const getAll=()=>{
    return users
}
export const filterByAge=(min)=>{
    let filtered = users.filter(x=>(x.age>min))
    if(filtered.length == 0)return {message:`not founnd any user have age more than ${min}`}
    else return filtered
}
export const findById=(id)=>{
    const target = users.find(x=>x.id==id)
    if(target)return target
    else return {message:"not found"}
}