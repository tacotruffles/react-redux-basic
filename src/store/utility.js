export const updateObject = (oldObject, updatedValues) => {
    //console.log('[Utility]: updateObject');

    return {
        ...oldObject,
        ...updatedValues
    }
};