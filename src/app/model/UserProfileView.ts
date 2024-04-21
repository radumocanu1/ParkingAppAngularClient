import {Feedback} from "./Feedback";
import {UUID} from "crypto";

export class UserProfileView {
  userUUID!: UUID;
  username!: string;
  feedbackList!: Feedback[];
  rating!: number;
  trusted!: boolean;
  email!: string;
  password!: string



}
