import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileResolver } from './profile.resolver';
import { Profile, ProfileSchema } from './profile.schema';
import { ProfileSevice } from './profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
  ],
  providers: [ProfileResolver, ProfileSevice],
})
export class ProfileModule {}
