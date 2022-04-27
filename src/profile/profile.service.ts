import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile, ProfileDocument } from './profile.schema';
import { ProfileInput } from './input/profile.input';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileSevice {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ) {}

  async create(createProfileDto: ProfileInput): Promise<Profile> {
    const createdProfile = new this.profileModel(createProfileDto);
    console.log('here => ', createdProfile);
    return createdProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }

  async delete(id: string): Promise<Profile> {
    return this.profileModel.findOneAndDelete({ id: id });
  }

  async update(updateProfileDto: UpdateProfileDto): Promise<Profile> {
    let curr_id = updateProfileDto.id;
    delete updateProfileDto.id;
    console.log('@@@ ', updateProfileDto);
    return this.profileModel.findOneAndUpdate(
      { id: curr_id },
      updateProfileDto,
    );
  }
}
