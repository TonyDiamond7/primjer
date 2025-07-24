const dateParagraph = document.getElementById('current-date-paragraph');


const currentDate = new Date();


const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();

const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


dateParagraph.textContent = `Trenutni datum: ${formattedDate}`;