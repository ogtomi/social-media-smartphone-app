import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import * as bcrypt from 'bcrypt';
import PostgresErrorCode from 'src/database/postgresErrorCodes';
import CreateUserDto from 'src/user/user.create.dto';
import User from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import TokenPayload from './interfaces/tokenPayload.i';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtServive: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register({ name, surname, password, email }: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await this.userService.create({
        name,
        surname,
        email,
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    } catch (e) {
      if (e?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('Email taken', HttpStatus.BAD_REQUEST);
      }
      console.log(e)
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.userService.findByEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {}
  }

  public getCookieWithJwtToken(user: User) {
    const payload: TokenPayload = { user };
    const token = this.jwtServive.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
      'JWT_EXPIRATION_TIME',
    )}`;
  }

  public getCookieForLogout() {
    return `Authentication=; HttpOnly; Path=/; Max-Age:0`;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const arePasswordsMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );

    if (!arePasswordsMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

interface IRegister {
  name: string;
  surname: string
  password: string;
  email: string;
}
