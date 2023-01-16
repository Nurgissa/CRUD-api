import u4 from "uuid";

export type UserDTO = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export type User = {
  getId: () => string;
  getUsername: () => string;
  getAge: () => number;
  getHobbies: () => string[];
};

type Props = {
  validateId: (id: string) => boolean;
};

export default function buildMakeUser({ validateId }: Props) {
  return function makeUser({ id, username, age, hobbies }: UserDTO): User {
    if (!validateId(id)) {
      throw new Error("Invalid id of user");
    }

    if (!username) {
      throw new Error("username is missing");
    }

    if (!age) {
      throw new Error("age is missing");
    }

    if (!hobbies) {
      throw new Error("hobbies attribute is missing");
    }

    if (!Array.isArray(hobbies)) {
      throw new Error("hobbies attribute should be an array");
    }

    return Object.freeze({
      getId: () => id,
      getUsername: () => username,
      getAge: () => age,
      getHobbies: () => hobbies,
    });
  };
}
