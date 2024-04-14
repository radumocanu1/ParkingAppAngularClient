import {UUID} from "crypto";

export class User {
  uuid!: UUID;
  username!: string;
  email!: string;
  password!: string;
}
