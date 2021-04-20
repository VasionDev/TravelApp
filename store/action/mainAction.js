export const QUESTION_COMPLETED = 'QUESTION_COMPLETED'

export const onCorrectAnswer = (categoryId, questionId) => {
    return {type: QUESTION_COMPLETED, categoryId, questionId}
}