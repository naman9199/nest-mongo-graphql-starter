import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileInput } from './input/profile.input';
import { UpdateProfileInput } from './input/updateProfile.input';
import { ProfileSevice } from './profile.service';

@Resolver()
export class ProfileResolver {
  constructor(private profileService: ProfileSevice) {}

  @Query(() => String)
  async greet() {
    return 'hello world!!';
  }

  @Query(() => [CreateProfileDto])
  async profiles() {
    return await this.profileService.findAll();
  }

  @Mutation(() => CreateProfileDto)
  async addProfile(@Args('input') input: ProfileInput) {
    console.log('add profile called!');
    return this.profileService.create(input);
  }

  @Mutation(() => CreateProfileDto)
  async deleteProfile(@Args('input') id: string) {
    return this.profileService.delete(id);
  }

  @Mutation(() => UpdateProfileDto)
  async updateProfile(@Args('input') input: UpdateProfileInput) {
    return this.profileService.update(input);
  }
}
