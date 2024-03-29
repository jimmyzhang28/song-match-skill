const { LAUNCH_STRING } = require('../utils/constants');

exports.RepeatIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
        .speak(LAUNCH_STRING)
        .reprompt(LAUNCH_STRING)
        .getResponse();
  }
};