// Define the user type
export type JokeType = {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: flagsType;
  id: number;
  safe: boolean;
  lang: string;
};

export type flagsType = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

// This type will represent the sub-state for getting a single user by ID
export type IJokeState = {
  data: JokeType | null;
  isLoading: boolean;
  errors: string;
};

// The users global state
export type JokesStateType = {
  joke: IJokeState;
  // Later, we can add other sub-states like:
  // list,
  // create,
  // update,
  // remove
};

// (1)
export const JOKES = "jokes";
// export type USERS = typeof USERS; // Typescript line

// // (2)
// export const GET_USER_BY_ID = `${USERS}/getUserAction`;
export const GET_JOKES = `${JOKES}/getJokeAction`;
// export type GET_USER_BY_ID = typeof GET_USER_BY_ID; // Typescript line
