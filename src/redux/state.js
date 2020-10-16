const state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hello world', likeCounts: 12},
            {id: 2, text: 'My blog', likeCounts: 5},
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Igor'},
        ],
        messages: [
            {id: 1, text: 'Hi!'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'Go!'},
        ]
    }
}
export default state
