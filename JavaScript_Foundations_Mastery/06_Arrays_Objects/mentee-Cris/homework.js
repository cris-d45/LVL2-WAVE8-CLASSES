// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)

// STEP 3: Log the total number of contacts.??

// STEP 4: Log the name of the first contact.

// STEP 5: Update one contact’s isFavorite value.

// STEP 6: Add (push) a new contact object.

// STEP 7: Log the updated contacts array.

let contacts = [
  { name: "Borus", phone: 4182157855, isFavorite: true },
  { name: "Anthony", phone: 7895891277, isFavorite: false },
];

console.log(`Total Contacts: ${contacts.length}`);
console.log(`First Contact Name: ${contacts[0].name}`);
contacts[1].isFavorite = true;
contacts.push = { name: "Kat", phone: 4567882390, isFavorite: true };
console.log("Updated Array:", contacts);
