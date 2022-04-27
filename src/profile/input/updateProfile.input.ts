import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProfileInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  age: number;
}
