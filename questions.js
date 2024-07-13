const questions = [
    // History Questions
    {
        question: "Who was the first president of the United States?",
        category: "history",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false },
            { text: "George Washington", correct: true },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        category: "history",
        answers: [
            { text: "1910", correct: false },
            { text: "1912", correct: true },
            { text: "1915", correct: false },
            { text: "1908", correct: false }
        ]
    },
    {
        question: "Who wrote the 'I Have a Dream' speech?",
        category: "history",
        answers: [
            { text: "Martin Luther King Jr.", correct: true },
            { text: "Malcolm X", correct: false },
            { text: "Frederick Douglass", correct: false },
            { text: "Rosa Parks", correct: false }
        ]
    },
    {
        question: "What was the primary cause of World War I?",
        category: "history",
        answers: [
            { text: "Invasion of Poland", correct: false },
            { text: "Treaty of Versailles", correct: false },
            { text: "Sinking of the Lusitania", correct: false },
            { text: "Assassination of Archduke Franz Ferdinand", correct: true },
        ]
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        category: "history",
        answers: [
            { text: "Amelia Earhart", correct: true },
            { text: "Bessie Coleman", correct: false },
            { text: "Harriet Quimby", correct: false },
            { text: "Jacqueline Cochran", correct: false },
        ]
    },
    // Science Questions
    {
        question: "What is the chemical symbol for water?",
        category: "science",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "HO2", correct: false }
        ]
    },
    {
        question: "What planet is known as the Red Planet?",
        category: "science",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        category: "science",
        answers: [
            { text: "Mitochondria", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Golgi apparatus", correct: false }
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        category: "science",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the speed of light?",
        category: "science",
        answers: [
            { text: "150,000,000 meters per second", correct: false },
            { text: "299,792,458 meters per second", correct: true },
            { text: "300,000,000 meters per second", correct: false },
            { text: "299,792 meters per second", correct: false }
        ]
    },
    // Geography Questions
    {
        question: "What is the capital of France?",
        category: "geography",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        category: "geography",
        answers: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "United States", correct: false },
            { text: "Russia", correct: true },
        ]
    },
    {
        question: "What river runs through Egypt?",
        category: "geography",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Mississippi", correct: false },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        category: "geography",
        answers: [
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        question: "Which desert is the largest in the world?",
        category: "geography",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Arabian", correct: false },
            { text: "Gobi", correct: false },
            { text: "Kalahari", correct: false }
        ]
    },
    //Sports Questions
    {
        question: "Which country has won the most FIFA World Cups?",
        category: "sports",
        answers: [
            { text: "Germany", correct: false },
            { text: "Italy", correct: false },
            { text: "Brazil", correct: true },
            { text: "Argentina", correct: false }
        ]
    },
    {
        question: "In which year were the first modern Olympic Games held?",
        category: "sports",
        answers: [
            { text: "1900", correct: false },
            { text: "1924", correct: false },
            { text: "1932", correct: false },
            { text: "1896", correct: true },
        ]
    },
    {
        question: "Who holds the record for the most home runs in a single MLB season?",
        category: "sports",
        answers: [
            { text: "Barry Bonds", correct: true },
            { text: "Babe Ruth", correct: false },
            { text: "Hank Aaron", correct: false },
            { text: "Mark McGwire", correct: false }
        ]
    },
    {
        question: "Which tennis player has won the most Grand Slam titles?",
        category: "sports",
        answers: [
            { text: "Roger Federer", correct: false },
            { text: "Rafael Nadal", correct: false },
            { text: "Serena Williams", correct: false },
            { text: "Margaret Court", correct: true }
        ]
    },
    {
        question: "In which sport would you perform a 'slam dunk'?",
        category: "sports",
        answers: [
            { text: "Basketball", correct: true },
            { text: "Volleyball", correct: false },
            { text: "Tennis", correct: false },
            { text: "Soccer", correct: false }
        ]
    },
    //Movies Questions
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        category: "movies",
        answers: [
            { text: "1917", correct: false },
            { text: "Joker", correct: false },
            { text: "Parasite", correct: true },
            { text: "Once Upon a Time in Hollywood", correct: false }
        ]
    },
    {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        category: "movies",
        answers: [
            { text: "Brad Pitt", correct: false },
            { text: "Tom Cruise", correct: false },
            { text: "Johnny Depp", correct: false },
            { text: "Leonardo DiCaprio", correct: true }
        ]
    },
    {
        question: "In the Matrix, which pill does Neo take?",
        category: "movies",
        answers: [
            { text: "Red", correct: true },
            { text: "Blue", correct: false },
            { text: "Green", correct: false },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        category: "movies",
        answers: [
            { text: "Steven Spielberg", correct: false },
            { text: "James Cameron", correct: false },
            { text: "Quentin Tarantino", correct: false },
            { text: "Christopher Nolan", correct: true }
        ]
    },
    {
        question: "What is the name of the fictional African country in 'Black Panther'?",
        category: "movies",
        answers: [
            { text: "Wakanda", correct: true },
            { text: "Zamunda", correct: false },
            { text: "Genovia", correct: false },
            { text: "Latveria", correct: false }
        ]
    },
    //Videogames Questions
    {
        question: "What is the name of the main character in the Legend of Zelda series?",
        category: "videogames",
        answers: [
            { text: "Zelda", correct: false },
            { text: "Ganon", correct: false },
            { text: "Epona", correct: false },
            { text: "Link", correct: true },
        ]
    },
    {
        question: "Which company developed the game 'Fortnite'?",
        category: "videogames",
        answers: [
            { text: "Activision", correct: false },
            { text: "Electronic Arts", correct: false },
            { text: "Epic Games", correct: true },
            { text: "Ubisoft", correct: false }
        ]
    },
    {
        question: "In which game do players compete in a battle royale on an island called Erangel?",
        category: "videogames",
        answers: [
            { text: "PlayerUnknown's Battlegrounds (PUBG)", correct: true },
            { text: "Call of Duty: Warzone", correct: false },
            { text: "Apex Legends", correct: false },
            { text: "Fortnite", correct: false }
        ]
    },
    {
        question: "What is the highest-grossing video game franchise of all time?",
        category: "videogames",
        answers: [
            { text: "Pokémon", correct: true },
            { text: "Super Mario", correct: false },
            { text: "Call of Duty", correct: false },
            { text: "Minecraft", correct: false }
        ]
    },
    {
        question: "Who is the creator of the game 'Minecraft'?",
        category: "videogames",
        answers: [
            { text: "Hideo Kojima", correct: false },
            { text: "Shigeru Miyamoto", correct: false },
            { text: "Gabe Newell", correct: false },
            { text: "Markus Persson", correct: true }
        ]
    }
];
