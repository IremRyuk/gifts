export const DataFilterAct = (dataAdd) => {
    return {type:'dataAdd',dataAdd}
}
export const DataFilterRemoveAct = (dataRemove) => {
    return {type:'dataRemove',dataRemove}
}
export let FilterAct = (changePrice) =>{
    return {type:'changePrice',changePrice}
}