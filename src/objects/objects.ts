/**
 * With typescript, you can use types with javascript objects.
 *
 * There is two main ways to define an object type, interfaces and types.
 *
 * Below you see the two-way to declare an object type definition :
 *
 * As you can imagine, this two methods to declare object typings have some slight differences,
 * but for now, these differences have no importance.
 */
export interface User1 {
  first_name: string;
  last_name: string;
}

export type User2 = {
  first_name: string;
  last_name: string;
};

/**
 * In the below function, you have to return a tuple with one object of each type.
 * As you will see, there is no differences between the two objects.
 * Take time to check your editor autocomplete, you will see that your editor can guess all object fields.
 * Event better, your editor can generate all missing fields of the object if you use the right shortcut.
 */
export function returnObjects(): [User1, User2] {
  // Write your code here
}

/**
 * Create a new user type with more detailed information :
 * - A field for the username of type string
 * - A field for the user birthdate of type Date
 * - A field with all user emails (array of strings)
 * - A field for the user address, witch is an object containing street, city and zip code fields
 */
export type YourDetailedUser = {
  // Write your code here
};