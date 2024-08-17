interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }

// *  1. Problematic in case of too many args
  function UserProfile(id: number, name: string, ){
    // DB call to display user profile
  }

//   * 2. Problematic if we want to change type of field, we need to change it at multiple places 
  interface UserProfile1 {
    id: number; 
    name: string;
  }
  function updateUser2(){
    // DB call to display user profile
  }

// * 3. Pick i.e For a profile display, only pick `name` and `email`
  type UserProfile2 = Pick<User, 'name' | 'email'>;
  const displayUserProfile = (user: UserProfile2) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
  