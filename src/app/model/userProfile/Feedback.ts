import {UUID} from "crypto";

export class Feedback{
  feedbackUUID! : UUID
  feedbackAuthor! : UUID
  message! :string;
  ratingGiven!: string;
  isAnonymous!: boolean;

}
