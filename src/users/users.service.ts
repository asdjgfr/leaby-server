import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entity/User.entity';
import { v4 } from 'uuid';
import { hexPassword } from '@/utils/crypto';
import { Role } from '@/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(params: { username: string; password: string; email: string }) {
    const slat = v4();

    const user = new User();
    user.username = params.username;
    user.password = hexPassword(slat, params.password);
    user.email = params.email;
    user.slat = slat;
    user.roles = Role.User0;

    await this.usersRepository.save(user);
  }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User | null> {
    let user = this.usersRepository.findOneBy({ username, isActive: true });
    if (!user) {
      user = this.usersRepository.findOneBy({
        email: username,
        isActive: true,
      });
    }
    return user;
  }
  findOneByKey(key: string, val: unknown): Promise<User | null> {
    return this.usersRepository.findOneBy({ [key]: val, isActive: true });
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
