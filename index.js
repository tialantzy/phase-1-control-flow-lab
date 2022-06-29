function scuberGreetingForFeet(price){ 
  if (price <= 400) {
    return 'This one is on me!'; 
  } else if (400 > price || price < 1900) {
    return 'That will be twenty bucks.';
  } else if (2000 > price || price < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (price >= 2500) {
    return 'No can do.'; 
  } 
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' :
      return "Thank you so much."; 
    break; 
    case 'not as generous' :
      return "Thank you."; 
    break; 
    default: 
      return "Bye."  
  }
}