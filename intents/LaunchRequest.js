const { LAUNCH_STRING, LAUNCH_SOUND } = require('../utils/constants.js');

exports.LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
    sessionAttributes.questionIndex = 0;
    sessionAttributes.artist = '';
    sessionAttributes.matchId = '';
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(LAUNCH_SOUND + LAUNCH_STRING)
      .reprompt(LAUNCH_SOUND + LAUNCH_STRING)
      .getResponse();
  }
};