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
    // First check if project exists
    const existingProject = await this.findById(id);
    if (!existingProject) {
      return null;
    }
  
    // Use TypeORM's queryRunner for transaction handling
    const queryRunner = this.projectRepository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  
    try {
      // Perform the update
      await queryRunner.manager.update(Project, id, updateProjectDto);
      
      // Get the updated project
      const updatedProject = await queryRunner.manager.findOne(Project, {
        where: { id }
      });
  
      // Commit the transaction
      await queryRunner.commitTransaction();
      return updatedProject;
    } catch (err) {
      // Rollback in case of error
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // Release the queryRunner
      await queryRunner.release();
    }
  }

  async remove(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
