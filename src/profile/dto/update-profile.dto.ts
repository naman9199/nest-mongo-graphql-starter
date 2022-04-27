import { Field, ID, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { CreateProfileDto } from './create-profile.dto';

@ObjectType()
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
