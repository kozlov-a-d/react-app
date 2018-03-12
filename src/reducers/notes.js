const initState = [
    {
        id: 1520761531379,
        title: "Первая заметка",
        description: "Тут какое то короткое описание\n"
    }, {
        id: 1520761538011,
        title: "Этеншен",
        description: "Орки угрожают караванам\n"
    }, {
        id: 1520761560139,
        title: "Сильдар Холлвинтер",
        description: "Пятидесятилетний мужик, поверенный Альянса Лордов\n"
    }
];

export default function notes(state = initState, action) {
    if (action.type === 'ADD_NOTE') {
        return [...state, action.payload];
    } else if (action.type === 'FETCH_NOTES_SUCCESS') {
        return action.payload;
    } else if (action.type === 'DELETE_NOTE') {
        return state;
    };

    return state;
}
