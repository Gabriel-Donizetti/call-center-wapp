import { PrismaClient } from "@prisma/client"

export abstract class GenericRepository<c, u, g> {
    p: PrismaClient

    constructor(){
      this.p = new PrismaClient
    }

    abstract getAll(): Promise<g[]>;
  
    abstract get(id: string): Promise<g>;
  
    abstract create(data: c): boolean;
  
    abstract update(id: string, data: u): boolean;

    abstract delete(id: string): boolean;
  }