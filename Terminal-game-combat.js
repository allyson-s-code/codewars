/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  //check if health after damage is still greater than 0- otherwise return 0
  return health - damage > 0 ? health - damage : 0;
}

//these are much cleaner-

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}

const combat = (health, damage) => Math.max(0, health - damage);
