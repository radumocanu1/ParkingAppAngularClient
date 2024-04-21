import {UUID} from "crypto";

export class Feedback{
  feedbackUUID! : UUID;
  profilePicPath! :string;
  feedbackAuthor! : UUID
  message! :string;
  ratingGiven!: string;
  anonymous!: boolean;

}
