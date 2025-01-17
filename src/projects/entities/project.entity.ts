// src/projects/entities/project.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  imageUrl: string;

  @Column()
  location: string;

  @Column()
  totalFloors: number;

  @Column('json')
  flatTypes: {
    type: string;
    size: number;
  }[];

  @Column()
  landArea: number;

  @Column({
    type: 'enum',
    enum: ['completed', 'ongoing', 'upcoming'],
    default: 'upcoming'
  })
  status: 'completed' | 'ongoing' | 'upcoming';

  @Column()
  startingPrice: number;

  @Column({ nullable: true })
  parking: boolean;

  @Column({ nullable: true })
  elevator: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}