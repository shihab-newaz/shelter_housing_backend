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

  @Column()
  image: string;

  @Column()
  location: string;

  @Column()
  units: number;

  @Column()
  progress: number;

  @Column({
    type: 'enum',
    enum: ['completed', 'ongoing', 'upcoming'],
    default: 'upcoming' 
  })
  status: 'completed' | 'ongoing' | 'upcoming'

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}