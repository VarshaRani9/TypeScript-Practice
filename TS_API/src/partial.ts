interface Users {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

// * 1. Problematic if we want to change type of field, we need to change it at multiple places
interface UpdatePropss {
    name?: string;
    age?: string;
    email?: string;
};

// * 2. Partial
type UpdateProps = Pick<Users, 'name' | 'age' | 'email'>
type UpdatePropsOptional = Partial<UpdateProps>
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})
