interface User1 {
    id: string;
    name: string;
}

type Users1 = { [key: string]: User1 };

const users1: Users1 = {
'abc123': { id: 'abc123', name: 'John Doe' },
'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};


// * RECORD
interface Userr {
    id: string;
    name: string;
}

type Userrs = Record<string, Userr>;

const users: Userrs = {
'abc123': { id: 'abc123', name: 'John Doe' },
'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// * MAP
interface User2 {
    id: string;
    name: string;
}
// Initialize an empty Map
const usersMap = new Map<string, User2>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }