export const DataFilterRed = (state=[],action) => {
    switch (action.type) {
        case 'dataAdd' : return state = [...state,action.dataAdd]
        case 'dataRemove' : return state = [...state.filter((info=>info != action.dataRemove))]
        default: return state
    }
}
export let FilterPrice = (state= [1,1000],action) =>{
    switch (action.type) {
        case 'changePrice':return state = action.changePrice
        default:return state
    }
}