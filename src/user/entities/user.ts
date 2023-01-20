import u4 from "uuid";
import { UserEntity } from "../types";
import { UserError } from "../errors";
import { type } from "os";

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
  return function makeUser({
    id,
    username,
    age,
    hobbies,
  }: UserDTO): UserEntity {
    if (!validateId(id)) {
      throw new UserError({
        name: "MALFORMED_INPUT",
        message: "Invalid id of user",
      });
    }

    if (!username) {
      throw new UserError({
        name: "MALFORMED_INPUT",
        message: "username is missing",
      });
    }

    if (!age) {
      throw new UserError({
        name: "MALFORMED_INPUT",
        message: "age is missing",
      });
    }

    if (!hobbies) {
      throw new UserError({
        name: "MALFORMED_INPUT",
        message: "hobbies attribute is missing",
      });
    }

    if (!Array.isArray(hobbies)) {
      throw new UserError({
        name: "MALFORMED_INPUT",
        message: "hobbies attribute should be an array",
      });
    }

    // TODO: check
    // hobbies.forEach((hobbie) => {
    //   if (typeof hobbie !== "string") {
    //     throw new UserError({
    //       name: "MALFORMED_USER",
    //       message: "hobbies should be type of string",
    //     });
    //   }
    // });

    return Object.freeze({
      id,
      username,
      age,
      hobbies,
    });
  };
}
