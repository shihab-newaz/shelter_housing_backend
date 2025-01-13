// src/projects/repositories/project.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

@Injectable()
export class ProjectRepository {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findById(id: number): Promise<Project | null> {
    return this.projectRepository.findOne({ where: { id } });
  }

  async findByStatus(status: 'completed' | 'ongoing' | 'upcoming'): Promise<Project[]> {
    return this.projectRepository.find({ where: { status } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project | null> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
