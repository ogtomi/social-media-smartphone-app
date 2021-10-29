import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    surname: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}

export default CreateUserDto;