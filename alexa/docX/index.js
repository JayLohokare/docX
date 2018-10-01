/* eslint-disable  func-names */
/* eslint-disable  no-console */
/* eslint-disable  no-restricted-syntax */

// IMPORTANT: Please note that this template uses Dispay Directives,
// Display Interface for your skill should be enabled through the Amazon developer console
// See this screenshot - https://alexa.design/enabledisplay

var http = require('http'); 

var data ;

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === `LaunchRequest`;
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(welcomeMessage)
      .reprompt(helpMessage)
      .getResponse();
  },
};

const QuizHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === "IntentRequest" &&
           (request.intent.name === "QuizIntent" || request.intent.name === "AMAZON.StartOverIntent");
  },
  handle(handlerInput) {
    
    // const param = handlerInput.requestEnvelope.request.intent.slots.quizTopic.value.toString();
    
    // const https = require('https');

    const response = handlerInput.responseBuilder;
        
    // https.get('https://hackny-218012.appspot.com/data/tomato', (res) => {
    //   let temp ="";
    //   res.on('data', (d) => {
    //     // process.stdout.write(d);
        
    //     // data = JSON.parse(d);
    //       temp+=d;
    //   });
    //   res.on('end',() =>{
        
    
    //   });
    
    // }).on('error', (e) => {
    //   console.error(e);
    // });
    
    return response.speak("Whats the best hackathon ever?")
            .reprompt("Whats the best hackathon ever?")
            .getResponse();
  },
  
  
};



const DefinitionHandler = {
  canHandle(handlerInput) {
    
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const request = handlerInput.requestEnvelope.request;

    return request.type === 'IntentRequest' &&
           request.intent.name === 'AnswerIntent';
  },
  handle(handlerInput) {
    
    const param = handlerInput.requestEnvelope.request.intent.slots.DocumentName.value.toString();
    const response = handlerInput.responseBuilder;
    
    const searchResult = ""
    if (true){
      return response.speak("Aweeesome")
            .reprompt(param)
            .getResponse();
    }
    else{
      return response.speak(getBadAnswer())
            .reprompt(getBadAnswer())
            .getResponse();
    }
  }
};




const QuizAnswerHandler = {
  canHandle(handlerInput) {
    
    const request = handlerInput.requestEnvelope.request;

    return request.type === 'IntentRequest' &&
           request.intent.name === 'AnswerIntent';
  },
  handle(handlerInput) {
     return handlerInput.responseBuilder
      .speak("Awesoooomeee!")
      .reprompt("Awesoooomeee!")
      .getResponse();
    
//     return response.speak("")
//       .reprompt(repromptOutput)
//       .getResponse();
      
    
//     const response = handlerInput.responseBuilder;

//     var speakOutput = ``;
//     var repromptOutput = ``;
    
//     const isCorrect = false;
    
//     if (handlerInput.requestEnvelope.request.intent.slots.DocumentName.value.toString()  == "hackny"){
//       return response.speak("Aweeesome")
//             .reprompt("Aweeesome")
//             .getResponse();}
    
//     if (handlerInput.requestEnvelope.request.intent.slots.DocumentName.value.toString() == data[0]['answer']){
//       isCorrect = true;
//     }
    
//     if (isCorrect) {
//       speakOutput = getSpeechCon(true);
      
//     } else {
//       speakOutput = getSpeechCon(false);
//     }

//     speakOutput += data[0]; //Answer
    
//     //Delete data[0]
//     data.shift();
    
//     var question = ``;
    
//     if (data.length >= 0) {
//       question = askQuestion(handlerInput);
//       speakOutput += question;
//       repromptOutput = question;

     
//       return response.speak(speakOutput)
//       .reprompt(repromptOutput)
//       .getResponse();
//     }
//     else {
//       return response.speak("Thats it for now. Good job!").getResponse();
//     }
//   },
// };

// const RepeatHandler = {
//   canHandle(handlerInput) {
//     console.log("Inside RepeatHandler");
//     const request = handlerInput.requestEnvelope.request;

//     return request.type === 'IntentRequest' &&
//           request.intent.name === 'AMAZON.RepeatHandler';
//   },
//   handle(handlerInput) {
//     console.log("Inside RepeatHandler - handle");
    
//     const question = askQuestion(handlerInput);

//     return handlerInput.responseBuilder
//       .speak(question)
//       .reprompt(question)
//       .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    console.log("Inside HelpHandler");
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' &&
           request.intent.name === 'AMAZON.HelpHandler';
  },
  handle(handlerInput) {
    console.log("Inside HelpHandler - handle");
    return handlerInput.responseBuilder
      .speak(helpMessage)
      .reprompt(helpMessage)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    console.log("Inside ExitHandler");
    
    const request = handlerInput.requestEnvelope.request;

    return request.type === `IntentRequest` && (
              request.intent.name === 'AMAZON.StopIntent' ||
              request.intent.name === 'AMAZON.PauseIntent' ||
              request.intent.name === 'AMAZON.CancelIntent'
           );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(exitSkillMessage)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    console.log("Inside SessionEndedRequestHandler");
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    
    return handlerInput.responseBuilder
      .speak("Something went wrong")
      .reprompt(helpMessage)
      .getResponse();
  },
};

/* CONSTANTS */
const skillBuilder = Alexa.SkillBuilders.custom();
const speechConsCorrect = ['Booya', 'All righty', 'Bam', 'Bazinga', 'Bingo', 'Boom', 'Bravo', 'Cha Ching', 'Cheers', 'Dynomite', 'Hip hip hooray', 'Hurrah', 'Hurray', 'Huzzah', 'Oh dear.  Just kidding.  Hurray', 'Kaboom', 'Kaching', 'Oh snap', 'Phew','Righto', 'Way to go', 'Well done', 'Whee', 'Woo hoo', 'Yay', 'Wowza', 'Yowsa'];
const speechConsWrong = ['Argh', 'Aw man', 'Blarg', 'Blast', 'Boo', 'Bummer', 'Darn', "D'oh", 'Dun dun dun', 'Eek', 'Honk', 'Le sigh', 'Mamma mia', 'Oh boy', 'Oh dear', 'Oof', 'Ouch', 'Ruh roh', 'Shucks', 'Uh oh', 'Wah wah', 'Whoops a daisy', 'Yikes'];




const welcomeMessage = 'Welcome to QuizIT! I have learnt all your docs and can summarize them for you, do a quick search or help you learn through quiz!';
const startQuizMessage = 'Lets begin the quiz!'
const exitSkillMessage = 'I hope I was useful to you today! See you soon! '
const repromptSpeech = 'How can I help you next?';
const helpMessage = 'I have learnt all your documents. I can help you find data in your documents, summarize files and help you learn by asking you questions';


function getBadAnswer() {
  return `I'm sorry. This is not something I know very much about in this skill. ${helpMessage}`;
}




function formatCasing(key) {
  return key.split(/(?=[A-Z])/).join(' ');
}




// getQuestionWithoutOrdinal returns the question without the ordinal and is
// used for the echo show.
function getQuestionWithoutOrdinal(property, item) {
  return "What is the " + formatCasing(property).toLowerCase() + " of "  + item.StateName + "?";
}

function getAnswer(property, item) {
  switch (property) {
    case 'Abbreviation':
      return `The ${formatCasing(property)} of ${item.StateName} is <say-as interpret-as='spell-out'>${item[property]}</say-as>. `;
    default:
      return `The ${formatCasing(property)} of ${item.StateName} is ${item[property]}. `;
  }
}

function getRandom(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

function askQuestion(handlerInput) {
  
  const question = data[0]['question'].toString();
  
  //question is data[0]
  return question;
}



function getItem(slots) {
  const propertyArray = Object.getOwnPropertyNames(data[0]);
  let slotValue;

  for (const slot in slots) {
    if (Object.prototype.hasOwnProperty.call(slots, slot) && slots[slot].value !== undefined) {
      slotValue = slots[slot].value;
      for (const property in propertyArray) {
        if (Object.prototype.hasOwnProperty.call(propertyArray, property)) {
          const item = data.filter(x => x[propertyArray[property]]
            .toString().toLowerCase() === slots[slot].value.toString().toLowerCase());
          if (item.length > 0) {
            return item[0];
          }
        }
      }
    }
  }
  return slotValue;
}

function getSpeechCon(type) {
  if (type) return `<say-as interpret-as='interjection'>${speechConsCorrect[getRandom(0, speechConsCorrect.length - 1)]}! </say-as><break strength='strong'/>`;
  return `<say-as interpret-as='interjection'>${speechConsWrong[getRandom(0, speechConsWrong.length - 1)]} </say-as><break strength='strong'/>`;
}


function getTextDescription(item) {
  let text = '';

  for (const key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      text += `${formatCasing(key)}: ${item[key]}\n`;
    }
  }
  return text;
}

function getAndShuffleMultipleChoiceAnswers(currentIndex, item, property) {
  return shuffle(getMultipleChoiceAnswers(currentIndex, item, property));
}

// This function randomly chooses 3 answers 2 incorrect and 1 correct answer to
// display on the screen using the ListTemplate. It ensures that the list is unique.
function getMultipleChoiceAnswers(currentIndex, item, property) {

  // insert the correct answer first
  let answerList = [item[property]];

  // There's a possibility that we might get duplicate answers
  // 8 states were founded in 1788
  // 4 states were founded in 1889
  // 3 states were founded in 1787
  // to prevent duplicates we need avoid index collisions and take a sample of
  // 8 + 4 + 1 = 13 answers (it's not 8+4+3 because later we take the unique
  // we only need the minimum.)
  let count = 0
  let upperBound = 12

  let seen = new Array();
  seen[currentIndex] = 1;

  while (count < upperBound) {
    let random = getRandom(0, data.length - 1);

    // only add if we haven't seen this index
    if ( seen[random] === undefined ) {
      answerList.push(data[random][property]);
      count++;
    }
  }

  // remove duplicates from the list.
  answerList = answerList.filter((v, i, a) => a.indexOf(v) === i)
  // take the first three items from the list.
  answerList = answerList.slice(0, 3);
  return answerList;
}

// This function takes the contents of an array and randomly shuffles it.
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while ( 0 !== currentIndex ) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/* LAMBDA SETUP */
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    QuizHandler,
    DefinitionHandler,
    QuizAnswerHandler,
    RepeatHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
