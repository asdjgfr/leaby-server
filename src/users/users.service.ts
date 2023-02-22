import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entity/User.entity';
import { isEmpty } from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(params: User): Promise<void> {
    if (isEmpty(params.username)) await this.usersRepository.create();
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username, isActive: true });
  }

  async remove(username: string): Promise<void> {
    const user = await this.findOne(username);
    if (user) {
      user.isActive = false;
      await this.usersRepository.save(user);
    } else {
      throw Error('用户未找到！');
    }
  }
}
