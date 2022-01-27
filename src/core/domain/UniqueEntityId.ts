
import uuid from 'uuid/v4';
import { Identifier } from './Identifier'

export class UniqueEntityId extends Identifier<string | number>{
  constructor (id: string) {
    super(id)
  }
}