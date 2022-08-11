//sources https://www.rd.com/list/science-trivia-questions/, https://www.rd.com/list/history-questions/

const questions = [
    {
      question: 'What is the capital of Alaska?',
      answers: [
        { text: 'Juneau', correct: true },
        { text: 'Dallas', correct: false },
        {text: 'Detroit', correct: false },
        {text: 'Columbus', correct: false },
  
      ], 
      category:'state-capital'
    },
    {
      question: 'What is the capital of Arizona?',
      answers: [
        { text: 'Phoenix', correct: true },
        { text: 'Little Rock', correct: false },
        { text: 'Sacramento', correct: false },
        { text: 'Dover', correct: false }
      ],
      category:'state-capital'
    },
    {
      question: 'What is the capital of Idaho?',
      answers: [
        { text: 'Topeka', correct: false },
        { text: 'Boise', correct: true },
        { text: 'Hartford', correct: false },
        { text: 'Atlanta', correct: false }
      ],
      category:'state-capital'
    },
    {
      question: 'What is the capital of Michigan?',
      answers: [
        { text: 'Lansing', correct: true },
        { text: 'Concord', correct: false },
        { text: 'Helena', correct: false },
        { text: 'Trenton', correct: false }
      ],
      category:'state-capital'
    },
    //science category
    {
      question: 'The concept of gravity was discovered by which famous physicist?',
      answers: [
        { text: 'Sir Isaac Newton', correct: true },
        { text: 'Einstein', correct: false },
        {text: 'Galileo', correct: false },
        {text: 'Neils Bohr', correct: false },
  
      ], 
      category:'science'
    },
    {
      question: 'How many colors are in the rainbow?',
      answers: [
        { text: '7', correct: true },
        { text: '6', correct: false },
        { text: '9', correct: false },
        { text: '8', correct: false }
      ],
      category:'science'
    },
    {
      question: 'True or False? Electrons are smaller than atoms',
      answers: [
        { text: 'False', correct: false },
        { text: 'True', correct: true }
      ],
      category:'science'
    },
    {
      question: 'Which is the most abundant element in the universe?',
      answers: [
        { text: 'Hydrogen', correct: true },
        { text: 'Carbon', correct: false },
        { text: 'Magnesium', correct: false },
        { text: 'Oxygen', correct: false }
      ],
      category:'science'
    },
    //History Questions
    {
      question: 'When was the Declaration of Independence signed?',
      answers: [
        { text: 'November 3, 1776',correct: false },
        { text: 'August 2, 1776', correct: true },
        {text: 'August 2, 1775', correct: false },
        {text: 'July 4th, 1775', correct: false },
  
      ], 
      category:'history'
    },
    {
      question: 'Where was Martin Luther King, Jr. born?',
      answers: [
        { text: 'Detroit', correct: false },
        { text: 'Columbus', correct: false },
        { text: 'Atlanta', correct: true },
        { text: 'Boston', correct: false }
      ],
      category:'history'
    },
    {
      question: 'What was the name of the battle in the Pacific fought between the U.S. Navy and the Imperial Japanese Navy in June 1942?',
      answers: [
        { text: 'Battle of Midway', correct: true },
        { text: 'Battle of Okinawa', correct: false },
        { text: 'Battle of the Bulge', correct: false },
        { text: 'Battle of Iwo Jima', correct: false }
      ],
      category:'history'
    },
    {
      question: 'What was the name of the series of programs and projects President Franklin D. Roosevelt enacted during The Great Depression?',
      answers: [
        { text: 'The Old Deal', correct: false },
        { text: 'Emergency Conservation Work', correct: false },
        { text: 'The New Deal', correct: true },
        { text: 'Emergency Banking Act', correct: false }
      ],
      category:'history'
    },

  ]

  module.exports = {
    getQuizByCategory: (req,res) => {
        const {id} = req.params
        const data = questions.filter(q => {
            return q.category === id
        }) 
        console.log(data,id)
       res.status(200).send(data) 
    }


  }