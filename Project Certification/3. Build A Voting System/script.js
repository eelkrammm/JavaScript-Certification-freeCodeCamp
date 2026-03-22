const poll = new Map(); 
function addOption(option){
  if(!option || !option.trim()){
    return `Option cannot be empty.`;
  } else if(!poll.has(option)){ 
      poll.set(option, new Set()); 
      return `Option "${option}" added to the poll.`
  } else if(poll.has(option)){
      return `Option "${option}" already exists.`
  }
 

}

function vote(option, voterId){
  const voters = poll.get(option); 
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`
  } 
  else if(poll.has(option)){
    if(voters.has(voterId)){
      return `Voter ${voterId} has already voted for "${option}".`;
    } else if(!voters.has(voterId)){
      voters.add(voterId); 
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

function displayResults(){
  let result = ["Poll Results:"]; 
  poll.forEach(function(value, key){
    result.push(`${key}: ${value.size} votes`); 
  })
  return result.join("\n");
}

addOption("nct"); 
vote("nct", "haechan");
vote("nct", "lele"); 
addOption("cortis"); 
vote("cortis", "martin");
addOption("h2h"); 
console.log(poll);
console.log(displayResults());
