export const formatDate = (date: Date) => {
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let newDate = `${month}-${year}`
    if (month < 10) {
        newDate = `0${month}-${year}`
    }
    return newDate;
};