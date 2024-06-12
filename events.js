//calendar objects
function manageEvents() {
const events = [
{
    title: 'coffee date',
    date: new Date (2024, 6, 14),
    location: 'artcafe',  
    attendees: new Set (['judy', 'lizzy', 'ken'])


},
{
    title: 'meeting',
    date: new Date (2024, 6, 18),
    location: 'meeting point',
    attendees: new Set (['martin', 'brenda', 'catherine', 'john', 'bryton'])
},
{
    title: 'interview',
    date: new Date (2024, 6, 13),
    location: 'nation center',
    attendees: new Set (['Mr patrick', 'Miss kambua'])
},
{
    title: 'wedding',
    date: new Date (2024, 6, 22),
    location: 'st cathedral',
    attendees: new Set (['tatiana', 'sonia', 'brian', 'alice', 'enock', 'eric'])
}
];
console.log(events);

const filterDate = new Date (2024, 6, 14);
const filteredEvents = events
.filter (event => event.date < filterDate)
.map(events => events.title);


console.log(filteredEvents);

const myWeakMap = new WeakMap();
const key = {name: 'interview'};
const value = 'Mr patrick';
myWeakMap.set(key, value);
//const eventOrganiser = myWeakMap.set(key, value);

console.log(myWeakMap.get(key));


const eventData = [];
events.forEach (({title, date, location}) => {
    eventData.push({title, date, location});
});

console.table(eventData);

function addAttendee(eventName, attendeeName) {
    const event = events.find(event => event.title === eventName);
    if (event){
        event.attendees.add(attendeeName);
    }else{
        console.log(`event ${eventName} notfound.`);

    }
}
addAttendee('baby shower', 'catherine');

console.log(events);
events.forEach(event => {
    event.toJSON = function (){
        const {title, date, location, attendees }= this;
        return {
            title,
            date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
            location,
            attendees: Array.from(attendees)
        };
    };
});
const firstEvent = events[0];

console.log('keys:', Object.keys(firstEvent));
console.log('values:', Object.values(firstEvent));
console.log('entries:', Object.entries(firstEvent));


events.forEach(event => {
    console.log(event.title, event.date);

});

events.splice(1, 3);
console.log(events);

const maxAttendeesEvent = events.reduce((maxEvent, currentEvent)=> {
    return currentEvent.attendees > maxEvent.attendees ? currentEvent : maxEvent;

}, events[0]);
console.log(maxAttendeesEvent);


}

manageEvents();






