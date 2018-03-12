const initState = [
    {
        id: 1520251531379,
        title: "Homepage",
        description: "Главная страница приложения"
    }, {
        id: 1520761958011,
        title: "About",
        description: "Описание проекта"
    }
];

export default function pages(state = initState, action) {
    if (action.type === 'ADD_PAGE') {
        return [...state, action.payload];
    } else if (action.type === 'DELETE_PAGE') {
        return state;
    };

    return state;
}
