import { IsNotEmpty, IsOptional, IsString, MaxLength, IsDateString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    title: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    description: string;

    @IsDateString()
    @IsOptional()
    dueDate?: string;
}
