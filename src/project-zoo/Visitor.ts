import { IVisitor } from './types';
export class Visitor implements IVisitor {
  constructor(public name: string, public contactInfo: string, public time: Date) {}
}
