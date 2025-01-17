// src/projects/dto/create-project.dto.ts
import { IsString, IsNumber, IsEnum, IsArray, IsBoolean, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class FlatTypeDto {
  @ApiProperty({ example: 'Type-A' })
  @IsString()
  type: string;

  @ApiProperty({ example: 1350 })
  @IsNumber()
  size: number;
}

export class CreateProjectDto {
  @ApiProperty({
    example: 'Jamal Tower',
    description: 'The name of the project'
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Luxury apartment building with modern amenities',
    description: 'Detailed description of the project'
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'URL of the project image'
  })
  @IsString()
  imageUrl: string;

  @ApiProperty({
    example: 'Dhaka',
    description: 'Project location'
  })
  @IsString()
  location: string;

  @ApiProperty({
    example: 7,
    description: 'Total number of floors (G+6)'
  })
  @IsNumber()
  totalFloors: number;

  @ApiProperty({
    type: [FlatTypeDto],
    description: 'Available flat types and their sizes'
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FlatTypeDto)
  flatTypes: FlatTypeDto[];

  @ApiProperty({
    example: 5,
    description: 'Land area in katha'
  })
  @IsNumber()
  landArea: number;

  @ApiProperty({
    enum: ['completed', 'ongoing', 'upcoming'],
    description: 'Current status of the project'
  })
  @IsEnum(['completed', 'ongoing', 'upcoming'])
  status: 'completed' | 'ongoing' | 'upcoming';

  @ApiProperty({
    example: 15000000,
    description: 'Starting price of units'
  })
  @IsNumber()
  startingPrice: number;

  @ApiProperty({
    example: true,
    description: 'Available parking'
  })
  @IsBoolean()
  parking: boolean;

  @ApiProperty({
    example: true,
    description: 'Elevator availability'
  })
  @IsBoolean()
  elevator: boolean;
}