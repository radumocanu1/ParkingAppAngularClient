import {UUID} from "crypto";

export class UserDTO {
  userUUID!: UUID;
  username!: string;
  email!: string;
}
