const mockApiData = [
    {
        id: 1520761531379,
        title: "Первая заметка",
        description: "Тут какое то короткое описание"
    }, {
        id: 1520761538011,
        title: "Этеншен",
        description: "Орки угрожают караванам"
    }, {
        id: 1520761560139,
        title: "Сильдар Холлвинтер",
        description: "Пятидесятилетний мужик, поверенный Альянса Лордов"
    }, {
        id: 1520761560139,
        title: "Ярно Стеклянный посох",
        description: "30 летний чувак, который подсуетился"
    }, {
        id: 1520761560139,
        title: "Фандалин",
        description: "типа город"
    }
];



/*
let storageState = localStorage.getItem('state');
let initState;

if (storageState !== null && storageState !== '{}') {
    storageState = JSON.parse(storageState);
    initState = { ...storageState };
} else {
    initState = [
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
}
*/

export const asyncGetNotes = () => dispatch => {
    setTimeout(() => {
        console.log('I got notes');
        dispatch({ type: 'FETCH_NOTES_SUCCESS', payload: mockApiData });
    }, 10)
}