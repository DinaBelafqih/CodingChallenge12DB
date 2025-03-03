//Task 1 - Created Revenue Metric Card
const dashboard = document.getElementById("dashboard"); //Use both document.getElementById
const dashboardSelector = document.querySelector('#dashboard'); //and document.querySelector to select the dashboard container.

function createMetricCard(id, title, initvalue) { //Making card creation repeatable through a function
    let card = document.createElement("div"); //Create a new <div> element using createElement to represent the metric card.
    card.setAttribute("class","metric-card"); //Use setAttribute to assign a class (e.g., "metric-card")
    card.setAttribute("id",id); //and an id (e.g., "revenueCard") to the new element.
    card.innerHTML = `<h3>${title}</h3><p>$${initvalue}</p>`; //Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0").
    dashboard.appendChild(card); //Append the new metric card to the dashboard container using appendChild.    
};

createMetricCard("revenueCard", "Revenue", 0); //Invoking our createMetricCard() for the Revenue Card

//Task 2 - Updated Metric Cards via Array Conversion
createMetricCard("profitCard", "Profit", 0); //Repeating this process
createMetricCard("expensesCard", "Expenses", 0); //"Your dashboard now includes multiple metric cards (e.g., Revenue, Profit, Expenses)."

const metricCardList = document.querySelectorAll(".metric-card"); //Use document.querySelectorAll to select all elements with the class "metric-card".
const metricCardArray = Array.from(metricCardList); //Convert the resulting NodeList into an array (using Array.from).

metricCardArray.forEach(card => { //Use an array method such as .forEach()
    card.innerHTML += "<p><i> - Updated</i></p>"; //to update each card’s inner text
    card.style.backgroundColor = "greenyellow"; //or to modify their styles.
});