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
