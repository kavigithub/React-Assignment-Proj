export function filterData(searcInputText, restaurentData) {
    const dataFilter = restaurentData.filter((item) => {
       return item?.data?.name?.toLowerCase()?.includes(searcInputText);
    })
    return dataFilter;
}