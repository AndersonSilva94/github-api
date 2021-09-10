import { createContext } from 'react';
import INITIAL_STATE from './data';

const GithubContext = createContext(INITIAL_STATE);

export default GithubContext;