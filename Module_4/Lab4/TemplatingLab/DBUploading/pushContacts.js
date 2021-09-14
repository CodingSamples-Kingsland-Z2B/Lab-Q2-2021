//Array Of person info Objects
const contacts = [
	{
		id: 1,
		name: "John",
		phoneNumber: "0847759632",
		email: "john@john.com",
	},
	{
		id: 2,
		name: "Merrie",
		phoneNumber: "0845996111",
		email: "merrie@merrie.com",
	},
	{
		id: 3,
		name: "Adam",
		phoneNumber: "0866592475",
		email: "adam@stamat.com",
	},
	{
		id: 4,
		name: "Peter",
		phoneNumber: "0866592475",
		email: "peter@peter.com",
	},
	{
		id: 5,
		name: "Max",
		phoneNumber: "0866592475",
		email: "max@max.com",
	},
	{
		id: 6,
		name: "David",
		phoneNumber: "0866592475",
		email: "david@david.com",
	},
];
let jsonString = JSON.stringify(contacts);
//console.log(jsonString);

//Your Firebase URL From Postman to this string below
let url = "Your Firebase URL From Postman to this string";
let headers = {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonString // body data type must match 
  };
fetch(url,headers)
.then(function(response){
    console.log(response);
    return response.text();
}).then(function(text){
    console.log(text);
    document.getElementById("text").innerHTML = text;
})
.catch(function(error){
    console.log(error);
});
