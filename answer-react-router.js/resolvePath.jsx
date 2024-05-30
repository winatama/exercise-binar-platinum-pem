import { resolvePath } from 'react-router-dom';

const currentLocation = '/user/profile';
const newPath = 'edit';

const resolvedPath = resolvePath(newPath, currentLocation);

console.log(resolvedPath); // Output: "/user/edit"