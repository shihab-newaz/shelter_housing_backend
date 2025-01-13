// src/projects/dto/create-project.dto.ts
import { IsString, IsNumber, IsEnum, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    example: 'Luxury Villa',
    description: 'The name of the project'
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'A beautiful luxury villa with ocean view',
    description: 'Detailed description of the project'
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'villa.jpg',
    description: 'Project image filename'
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: 'Malibu Beach',
    description: 'Project location'
  })
  @IsString()
  location: string;

  @ApiProperty({
    example: 120,
    description: 'Number of units in the project'
  })
  @IsNumber()
  @Min(1)
  units: number;

  @ApiProperty({
    example: 75,
    description: 'Project completion percentage',
    minimum: 0,
    maximum: 100
  })
  @IsNumber()
  @Min(0)
  @Max(100)
  progress: number;

  @ApiProperty({
    enum: ['completed', 'ongoing', 'upcoming'],
    description: 'Current status of the project'
  })
  @IsEnum(['completed', 'ongoing', 'upcoming'])
  status: 'completed' | 'ongoing' | 'upcoming';
}