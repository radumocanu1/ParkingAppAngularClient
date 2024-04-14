import {UUID} from "crypto";

export class UserDTO {
  uuid!: UUID;
  username!: string;
  email!: string;
}
