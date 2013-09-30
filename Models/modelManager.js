// modeManager.js
// ==============

var Gift_Apostleship = 'Apostleship';
var Gift_Prophecy = 'Prophecy';
var Gift_Evangelism = 'Evangelism';
var Gift_Pastoring = 'Pastoring';
var Gift_Teaching = 'Teaching';
var Gift_Serving = 'Serving';
var Gift_Exhortation = 'Exhortation';
var Gift_Giving = 'Giving';
var Gift_Leadership = 'Leadership';
var Gift_Compassion = 'Compassion';
var Gift_Healing = 'Healing';
var Gift_Miracles = 'Miracles';
var Gift_Tongues = 'Tongues';
var Gift_Interpretation = 'Interpretation';
var Gift_Wisdom = 'Wisdom';
var Gift_Knowledge = 'Knowledge';
var Gift_Faith = 'Faith';
var Gift_Discernment = 'Discernment';
var Gift_Helps = 'Helps';
var Gift_Administration = 'Administration';

module.exports = {
	getQuestions: function()
	{
		return generateRandomizedQuestions();
	},
	answerQuestion: function(question)
	{
		
	}
};

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateRandomizedQuestions ()
{
	var allQuestions = [];
	
	allQuestions.push.apply(allQuestions, getApostleshipQuestions());
	allQuestions.push.apply(allQuestions, getProphecyQuestions());
	allQuestions.push.apply(allQuestions, getEvangelismQuestions());
	allQuestions.push.apply(allQuestions, getPastoringQuestions());
	allQuestions.push.apply(allQuestions, getTeachingQuestions());
	allQuestions.push.apply(allQuestions, getServingQuestions());
	allQuestions.push.apply(allQuestions, getExhortationQuestions());
	allQuestions.push.apply(allQuestions, getGivingQuestions());
	allQuestions.push.apply(allQuestions, getLeadershipQuestions());
	allQuestions.push.apply(allQuestions, getCompassionQuestions());
	allQuestions.push.apply(allQuestions, getHealingQuestions());
	allQuestions.push.apply(allQuestions, getMiraclesQuestions());
	allQuestions.push.apply(allQuestions, getTonguesQuestions());
	allQuestions.push.apply(allQuestions, getInterpretationQuestions());
	allQuestions.push.apply(allQuestions, getWisdomQuestions());
	allQuestions.push.apply(allQuestions, getKnowledgeQuestions());
	allQuestions.push.apply(allQuestions, getFaithQuestions());
	allQuestions.push.apply(allQuestions, getDiscernmentQuestions());
	allQuestions.push.apply(allQuestions, getHelpsQuestions());
	allQuestions.push.apply(allQuestions, getAdministrationQuestions());


	return shuffle(allQuestions);
}

function Question (gift, order, prompt, answeredValue)
{
	this.gift = gift;
	this.order = order;
	this.prompt = prompt;
	this.answeredValue = answeredValue;
}

function createQuestions(gift, promptsArray)
{
	var questions = new Array();
	
	for(var i = 0; i < promptsArray.length; i++)
	{
		var curQuestion = new Question(gift, i, promptsArray[i], -1);
		questions[i] = curQuestion;
	}
	
	return questions;
}

function getApostleshipQuestions ()
{
	var prompts    = [
					 "first apostleship question",
					 "second apostleship question",
					 "third apostleship question",
					 "fourth apostleship question",
					 "fifth apostleship question",
					 "sixth apostleship question",
					 "seventh apostleship question",
					 ];
					 
	return createQuestions(Gift_Apostleship, prompts);
}

function getProphecyQuestions ()
{
	var prompts    = [
					 "first prophecy question",
					 "second prophecy question",
					 "third prophecy question",
					 "fourth prophecy question",
					 "fifth prophecy question",
					 "sixth prophecy question",
					 "seventh prophecy question",
					 ];
					 
	return createQuestions(Gift_Prophecy, prompts);
}

function getEvangelismQuestions ()
{
	var prompts    = [
					 "first evangelism question",
					 "second evangelism question",
					 "third evangelism question",
					 "fourth evangelism question",
					 "fifth evangelism question",
					 "sixth evangelism question",
					 "seventh evangelism question",
					 ];
					 
	return createQuestions(Gift_Evangelism, prompts);
}

function getPastoringQuestions ()
{
	var prompts    = [
					 "first pastoring question",
					 "second pastoring question",
					 "third pastoring question",
					 "fourth pastoring question",
					 "fifth pastoring question",
					 "sixth pastoring question",
					 "seventh pastoring question",
					 ];
					 
	return createQuestions(Gift_Pastoring, prompts);
}

function getTeachingQuestions ()
{
	var prompts    = [
					 "first teaching question",
					 "second teaching question",
					 "third teaching question",
					 "fourth teaching question",
					 "fifth teaching question",
					 "sixth teaching question",
					 "seventh teaching question",
					 ];
					 
	return createQuestions(Gift_Teaching, prompts);
}

function getServingQuestions ()
{
	var prompts    = [
					 "first serving question",
					 "second serving question",
					 "third serving question",
					 "fourth serving question",
					 "fifth serving question",
					 "sixth serving question",
					 "seventh serving question",
					 ];
					 
	return createQuestions(Gift_Serving, prompts);
}

function getExhortationQuestions ()
{
	var prompts    = [
					 "first exhortation question",
					 "second exhortation question",
					 "third exhortation question",
					 "fourth exhortation question",
					 "fifth exhortation question",
					 "sixth exhortation question",
					 "seventh exhortation question",
					 ];
					 
	return createQuestions(Gift_Exhortation, prompts);
}

function getGivingQuestions ()
{
	var prompts    = [
					 "first giving question",
					 "second giving question",
					 "third giving question",
					 "fourth giving question",
					 "fifth giving question",
					 "sixth giving question",
					 "seventh giving question",
					 ];
					 
	return createQuestions(Gift_Giving, prompts);
}

function getLeadershipQuestions ()
{
	var prompts    = [
					 "first leadership question",
					 "second leadership question",
					 "third leadership question",
					 "fourth leadership question",
					 "fifth leadership question",
					 "sixth leadership question",
					 "seventh leadership question",
					 ];
					 
	return createQuestions(Gift_Leadership, prompts);
}

function getCompassionQuestions ()
{
	var prompts    = [
					 "first compassion question",
					 "second compassion question",
					 "third compassion question",
					 "fourth compassion question",
					 "fifth compassion question",
					 "sixth compassion question",
					 "seventh compassion question",
					 ];
					 
	return createQuestions(Gift_Compassion, prompts);
}

function getHealingQuestions ()
{
	var prompts    = [
					 "first healing question",
					 "second healing question",
					 "third healing question",
					 "fourth healing question",
					 "fifth healing question",
					 "sixth healing question",
					 "seventh healing question",
					 ];
					 
	return createQuestions(Gift_Healing, prompts);
}

function getMiraclesQuestions ()
{
	var prompts    = [
					 "first miracles question",
					 "second miracles question",
					 "third miracles question",
					 "fourth miracles question",
					 "fifth miracles question",
					 "sixth miracles question",
					 "seventh miracles question",
					 ];
					 
	return createQuestions(Gift_Miracles, prompts);
}

function getTonguesQuestions ()
{
	var prompts    = [
					 "first tongues question",
					 "second tongues question",
					 "third tongues question",
					 "fourth tongues question",
					 "fifth tongues question",
					 "sixth tongues question",
					 "seventh tongues question",
					 ];
					 
	return createQuestions(Gift_Tongues, prompts);
}

function getInterpretationQuestions ()
{
	var prompts    = [
					 "first interpretation question",
					 "second interpretation question",
					 "third interpretation question",
					 "fourth interpretation question",
					 "fifth interpretation question",
					 "sixth interpretation question",
					 "seventh interpretation question",
					 ];
					 
	return createQuestions(Gift_Interpretation, prompts);
}

function getWisdomQuestions ()
{
	var prompts    = [
					 "first wisdom question",
					 "second wisdom question",
					 "third wisdom question",
					 "fourth wisdom question",
					 "fifth wisdom question",
					 "sixth wisdom question",
					 "seventh wisdom question",
					 ];
					 
	return createQuestions(Gift_Wisdom, prompts);
}

function getKnowledgeQuestions ()
{
	var prompts    = [
					 "first knowledge question",
					 "second knowledge question",
					 "third knowledge question",
					 "fourth knowledge question",
					 "fifth knowledge question",
					 "sixth knowledge question",
					 "seventh knowledge question",
					 ];
					 
	return createQuestions(Gift_Knowledge, prompts);
}

function getFaithQuestions ()
{
	var prompts    = [
					 "first faith question",
					 "second faith question",
					 "third faith question",
					 "fourth faith question",
					 "fifth faith question",
					 "sixth faith question",
					 "seventh faith question",
					 ];
					 
	return createQuestions(Gift_Faith, prompts);
}

function getDiscernmentQuestions ()
{
	var prompts    = [
					 "first discernment question",
					 "second discernment question",
					 "third discernment question",
					 "fourth discernment question",
					 "fifth discernment question",
					 "sixth discernment question",
					 "seventh discernment question",
					 ];
					 
	return createQuestions(Gift_Discernment, prompts);
}

function getHelpsQuestions ()
{
	var prompts    = [
					 "first helps question",
					 "second helps question",
					 "third helps question",
					 "fourth helps question",
					 "fifth helps question",
					 "sixth helps question",
					 "seventh helps question",
					 ];
					 
	return createQuestions(Gift_Helps, prompts);
}

function getAdministrationQuestions ()
{
	var prompts    = [
					 "first administration question",
					 "second administration question",
					 "third administration question",
					 "fourth administration question",
					 "fifth administration question",
					 "sixth administration question",
					 "seventh administration question",
					 ];
					 
	return createQuestions(Gift_Administration, prompts);
}