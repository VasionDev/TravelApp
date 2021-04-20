import { CATEGORY_LIST, QUESTION_LIST } from './../../data/dummy-data';
import { QUESTION_COMPLETED } from './../action/mainAction';

const initialState = {
    categories: CATEGORY_LIST,
    questions: QUESTION_LIST,
    completed: {},
    totalCompleted: 0
}

export const mianReducer = (state=initialState, action) => {
    switch (action.type) {
        case QUESTION_COMPLETED:
            let updatedCompleteList = []
            if(state.completed[action.categoryId]) {
                const alreadyCompleted = state.completed[action.categoryId]
                updatedCompleteList = alreadyCompleted.slice()
                if(!updatedCompleteList.includes(action.questionId)){
                    updatedCompleteList.push(action.questionId)
                }
            }else {
                updatedCompleteList.push(action.questionId)
            }
            return {
                ...state,
                completed: {...state.completed, [action.categoryId]: updatedCompleteList},
                totalCompleted: state.totalCompleted + 1
            }
        default:
            state;
    }
    return state
}
