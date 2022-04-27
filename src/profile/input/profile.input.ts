import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProfileInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
