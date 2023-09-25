/* Task class Definition in TS */ 
export class Task {
    id: number | undefined;
    name: string = '';
    isActive: boolean = false;
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.isActive) this.isActive = initializer.isActive;
    }
}